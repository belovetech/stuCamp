const APIfeatures = require('./../utils/apifeatures');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const Hostels = require('./../models/hostelModel');

// HOSTEL ROUTER MIDDLEWARE
exports.aliasTopCheap = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price,-ratingsAverage';
  req.query.fields = 'name,price,type,ratingsAverage';
  console.log(req.query);
  next();
};

exports.getAllHostels = catchAsync(async (req, res, next) => {
  const features = new APIfeatures(Hostels.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  // console.log(features.query)
  const hostels = await features.query;

  res.status(200).json({
    status: 'success',
    results: hostels.length,
    data: {
      hostels,
    },
  });
});

exports.getHostel = catchAsync(async (req, res, next) => {
  const hostel = await Hostels.findById(req.params.id);

  if (!hostel) {
    return next(new AppError('Hostel was not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      hostel,
    },
  });
});

exports.createHostel = catchAsync(async (req, res, next) => {
  const hostel = await Hostels.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      hostel,
    },
  });
});

exports.updateHostel = catchAsync(async (req, res, next) => {
  const hostel = await Hostels.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!hostel) {
    return next(new AppError('Hostel was not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      hostel,
    },
  });
});

exports.deleteHostel = catchAsync(async (req, res, next) => {
  const hostel = await Hostels.findByIdAndDelete(req.params.id);

  if (!hostel) {
    return next(new AppError('Hostel was not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
