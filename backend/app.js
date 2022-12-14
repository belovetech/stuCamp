const express = require('express');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const corsOptions ={
  origin:'*',
  credentials:true,   //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const cookieParser = require('cookie-parser');


const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// ROUTES
const hostelRouter = require('./routes/hostelRouter');
const userRouter = require('./routes/userRouter');
const reviewRouter = require('./routes/reviewRouter');
const viewRouter = require('./routes/viewRouter');

// insantiate express app
const app = express();

// SET UP VIEW ENGINE
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES

//CORS
app.use(cors(corsOptions))

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
// app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

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
app.use(cookieParser());
// app.use(express.json({ limit: '10kb' }));

// Data sanitization against noSQL injection
app.use(mongoSanitizer());

// Data sanitization against XSS
app.use(xss());

// Prevent paramaters pollution
app.use(
  hpp({
    whitelist: [
      'price',
      'ratingsAverage',
      'roomsAvailable',
      'type',
      'location',
    ],
  })
);

// Testing Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies.jwt);
  next();
});

// ROUTES
app.use('/', viewRouter);
app.use('/api/v1/hostels', hostelRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

// HANDLE UNHANDLED ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 400));
});

// ERROR MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
