const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const hostelRouter = require('./routes/hostelRouter');
const userRouter = require('./routes/userRouter');

// insantiate express app
const app = express();

// GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Development logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit request from the same IP
const limiter = rateLimit({
  max: 50, // 50 request
  windows: 60 * 60 * 1000, // 1hr
  message: 'Too many request from this IP, Please try again in an hour.',
});
app.use('/api', limiter);

// Body parser reading data from body into req.body
app.use(express.json());
// app.use(express.json({ limit: '10kb' }));

// Testing Middleware
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
