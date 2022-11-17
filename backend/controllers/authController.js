const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const Users = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

// GENERATE JWT TOKEN
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// SIGNUP
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
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

// LOGIN
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

// AUTHENTICATION
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1). Get token and check if exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please login to gain access!', 401)
    );
  }

  // 2). verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3). Check if user still exists
  const currentUser = await Users.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  // 4). Check if user change password after the token was issued
  // const changePassword = currentUser.changedPasswordAfter(decode.iat);
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! please log in again', 401)
    );
  }

  // GRANT ACCES TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});

// AUTHORIZATION
exports.restrictTo = (...roles) => {
  console.log(roles);
  return (req, res, next) => {
    // roles = ['admin', 'hostel-owner']
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action.', 403)
      );
    }
    next();
  };
};
