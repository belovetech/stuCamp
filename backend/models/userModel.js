const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please, tell us your name'],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please, provide youe email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'hostel-owner', 'care-taker', 'admin'],
      message: 'A user type can either be: user, care-taker, or hostel_owner',
    },
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: 'Passwords are not the same!',
    },
  },
  /*
  hostel: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hostel',
    required: [true, 'User must belong to a hostel'],
  },*/
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// document middleware
userSchema.pre('save', async function (next) {
  //Only run this function if password is actually modified
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  // Delete password confirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  // deduct 1 seconds so that token will be created after the passwordChangedAt has been set
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Only active user should be listed
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

/* 
userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'hostel',
    select: 'name',
  });
  next();
});*/

// Document instance methods.
// This methods will be available on every instance of the document
// CORRECT PASSWORD
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// IF PASSWORD WAS CHNAGED AFTER TOKEN WAS ISSUED
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    // Convert time to seconds from milliseconds
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

// GENERATE RESET TOKEN
userSchema.methods.forgetPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  // compute 10 minutes in milliseconds
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
