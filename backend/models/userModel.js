const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: [true, 'Please, tell us your name'],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    require: [true, 'Please, provide youe email'],
    lowercase: true,
    validate: [validator.isEmail, 'PLease provide a valid email'],
  },
  active: {
    type: Boolean,
    default: false,
  },
  photo: String,
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: 'Passwords are not the same!',
    },
  },
});

userSchema.pre('save', async function (next) {
  //Only run this function is password is actually modified
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
