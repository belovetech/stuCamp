const express = require('express');
const morgan = require('morgan');

const hostelRouter = require('./routes/hostelRouter');

// insantiate express app
const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/hostels', hostelRouter);

module.exports = app;
