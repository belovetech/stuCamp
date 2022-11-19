const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const hostelRouter = require('./routes/hostelRouter');
const userRouter = require('./routes/userRouter');

// insantiate express app
const app = express();

// GLOBAL MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 50, // 50 request
  windows: 60 * 60 * 1000, // 1hr
  message: 'Too many request. Please try again in an hour.',
});

app.use('/api', limiter);

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/hostels', hostelRouter);
app.use('/api/v1/users', userRouter);

// HANDLE UNHANDLED ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 400));
});

// ERROR MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
