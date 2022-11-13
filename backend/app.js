const express = require('express');
const app = express();
const morgan = express('morgan');
const hostelRouter = require('./routes/hostelRouter');

// MIDDLEWARES
app.use(express.json());
if (process.env.EVV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/hostels', hostelRouter);

module.exports = app;
