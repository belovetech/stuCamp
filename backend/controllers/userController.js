const AppError = require('./../utils/appError');
const Users = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

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
