const Hostels = require('./../models/hostelModel');
const APIfeatures = require('./../utils/apifeatures');

exports.getAllHostels = async (req, res, next) => {
  try {
    const features = new APIfeatures(Hostels.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const hostels = await features.query;

    res.status(200).json({
      status: 'success',
      results: hostels.length,
      data: {
        hostels,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Resources not found',
    });
  }
};

exports.getHostel = async (req, res, next) => {
  try {
    const hostel = await Hostels.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        hostel,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Resources not found',
      stack: err,
    });
  }
};

exports.createHostel = async (req, res, next) => {
  try {
    const hostel = await Hostels.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        hostel,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Bad request',
      stack: err,
    });
  }
};

exports.updateHostel = async (req, res, next) => {
  try {
    const hostel = await Hostels.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hostel) next(err);

    res.status(200).json({
      status: 'success',
      data: {
        hostel,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: 'fail',
      message: 'Resource not found',
      stack: err,
    });
  }
};

exports.deleteHostel = async (req, res, next) => {
  try {
    const hostel = await Hostels.findByIdAndDelete(req.params.id);

    if (!hostel) next(err);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Resource not found',
      stack: err,
    });
  }
};
