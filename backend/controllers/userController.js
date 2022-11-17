const AppError = require('./../utils/appError');
const Users = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getMe = catchAsync(async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  if (!user) {
    return next(new AppError('User was not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

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
  const updatedUser = await Users.findByIdAndUpdate(req.user.id, filteredObj, {
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
  await Users.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
