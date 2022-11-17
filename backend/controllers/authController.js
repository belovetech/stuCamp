const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const Users = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const sendEmail = require('./../utils/sendEmail');

// GENERATE JWT TOKEN
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  //   JWT TOKEN
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
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

  createSendToken(newUser, 201, res);
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
  createSendToken(user, 200, res);
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
  return (req, res, next) => {
    // roles = ['admin', 'hostel-owner']
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action.', 403)
      );
    }
    next();
  };
};

// FORGOT PASSWORD
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1). Get user based on posted email
  const user = await Users.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with the email address.', 404));
  }

  // 2). Generate random reset token
  const resetToken = user.forgetPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}//:${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? submit a PATCH request with your new password and condirm password to: ${resetURL}.\nIf you didn't forget your password, please ignore this email.`;

  // 3). Send it to user's email
  try {
    await sendEmail({
      email: user.email,
      subject: 'Your reset password token. (expires in 10 min).',
      message,
    });
    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending email. Try again!', 500)
    );
  }
});

// RESET PASSWORD
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1). Hash token fetch from the user's URL
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await Users.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2). if token has not expired and there is user
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 404));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3). update changePasswordAt for the user
  // 4). log user in and send JWT token
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1). Get user from the collection
  const { passwordCurrent, password, passwordConfirm } = req.body;
  const user = await Users.findById(req.user.id).select('+password');

  // 2). Check if current POSTed password is correct
  if (!user || !user.correctPassword(passwordCurrent, user.password)) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3). if so, update the password
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save();

  // 4). log user in and send JWT token
  createSendToken(user, 200, res);
});
