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
  // role: {
  //   type: String,
  //   trim: true,
  //   enum: {
  //     values: ['admin', 'user'],
  //     messages: 'You can either login as Admin or User',
  //   },
  // },
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

const User = mongoose.model('User', userSchema);

module.exports = User;
