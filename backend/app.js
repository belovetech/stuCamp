const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const hostelRouter = require('./routes/hostelRouter');
const userRouter = require('./routes/userRouter');

// insantiate express app
const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
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
