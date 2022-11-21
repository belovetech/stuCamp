const AppError = require('./../utils/appError');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./factoryController');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1). Check if password and passwordConfirm are not part of POSTed data to be updated
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This is not the route to update password. please use /updateMyPassword',
        400
      )
    );
  }

  // 2) filter out unwanted fields that are not allowed to be updated
  const filteredObj = filterObj(req.body, 'name', 'email');

  // 3). Update allowed fields
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredObj, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createUser = (req, res, next) => {
  res.status(500).json({
    status: 'success',
    message: 'This route is not defined! please use /signup instead',
  });
};

exports.getAllUser = factory.getAll(User);
exports.getUser = factory.getOne(User);
// DO NOT update password with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
