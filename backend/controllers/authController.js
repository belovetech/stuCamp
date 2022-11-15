const AppError = require('./../utils/appError');
const Users = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  //   JWT TOKEN
  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //   1). check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide a valid email and password', 400));
  }

  //   2). check if user and password exists
  const user = await Users.findOne({ email }).select('+password');
  //   const correct = await user.correctPassword(password, user.password);

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or passowrd', 401));
  }

  //   3. If everything ok, send token
  const token = signToken(user._id);

  res.status(201).json({
    status: 'sucess',
    token,
  });
});
