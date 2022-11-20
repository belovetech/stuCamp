const Review = require('./../models/reviewModel');
const factory = require('./factoryController');

// NESTED HOSTEL REVIEW ROUTE MIDDLEWARE
exports.setHostelUserIds = (req, res, next) => {
  // allow nested routes
  if (!req.body.hostel) req.body.hostel = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);

/*
exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { hostel: req.params.tourId };

  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});*/
