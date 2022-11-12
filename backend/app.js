const express = require('express');
const app = express();
const morgan = express('morgan');

// MIDDLEWARES
app.use(express.json());
if (process.env.EVV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/hostels', (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
});

module.exports = app;
