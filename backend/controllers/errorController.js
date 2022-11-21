const AppError = require('./../utils/appError');

// GLOBAL PRODUCTION ERROR HANDLERS
const handleCastErrorDB = err => {
  const msg = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(msg, 400);
};

const handleDuplicateErrorDB = err => {
  // const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0]
  const value = err.keyValue.name;
  const msg = `Duplicate field value \"${value}\": please, use another value`;
  return new AppError(msg, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const msg = `Invalid input data: ${errors.join('. ')}`;
  return new AppError(msg, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. please login again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired. Please login again!', 401);

// DEVELOPMENT ERROR FORMAT
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

// PRODUCTION ERROR FORMAT
const sendErrorProd = (err, res) => {
  // Operational, trusted error: send msg to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming or other unknown error: don't leak error details
    // 1). Log error
    console.error('ERROR 🔥 ', err);

    // 2). Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack());
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateErrorDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    sendErrorProd(error, res);
  }
};
