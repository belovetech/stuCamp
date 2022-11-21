const Hostel = require('./../models/hostelModel');
const factory = require('./factoryController');

// HOSTEL ROUTER MIDDLEWARE
exports.aliasTopCheap = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price,-ratingsAverage';
  req.query.fields = 'name,price,type,ratingsAverage';
  next();
};

exports.getHostelByLocation = (req, res, next) => {
  req.query.location = req.params.id;
  next();
};

exports.getAllHostels = factory.getAll(Hostel);
exports.getHostel = factory.getOne(Hostel, { path: 'reviews' });
exports.createHostel = factory.createOne(Hostel);
exports.updateHostel = factory.updateOne(Hostel);
exports.deleteHostel = factory.deleteOne(Hostel);

/*
BEFORE FACTORY CONTROLLER WAS CREATED
exports.getAllHostels = catchAsync(async (req, res, next) => {
  const features = new APIfeatures(Hostel.find(), req.query)
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
  const hostel = await Hostel.findById(req.params.id).populate('reviews');

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
  const hostel = await Hostel.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      hostel,
    },
  });
}); 

exports.updateHostel = catchAsync(async (req, res, next) => {
  const hostel = await Hostel.findByIdAndUpdate(req.params.id, req.body, {
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
  const hostel = await Hostel.findByIdAndDelete(req.params.id);

  if (!hostel) {
    return next(new AppError('Hostel was not found', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});*/
