const Hostel = require('./../models/hostelModel');
const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const APIfeatures = require('./../utils/apifeatures');

exports.getOverview = catchAsync(async (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price,-ratingsAverage';
  req.query.fields = 'name,price,type,summary,imageCover, slug';

  const features = new APIfeatures(Hostel.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const hostels = await features.query;
  const reviews = await Review.find();

  res.status(200).render('overview', {
    title: 'Most popular',
    hostels,
    reviews,
  });
});

exports.getAllHostel = catchAsync(async (req, res, next) => {
  const hostels = await Hostel.find();

  res.status(200).render('hostels', {
    title: 'All hostels ',
    hostels,
  });
});

exports.getHostel = catchAsync(async (req, res, next) => {
  const hostel = await Hostel.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review  rating user',
  });

  res.status(200).render('hostel', {
    title: hostel.name,
    hostel,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Login into your account!',
  });
};
