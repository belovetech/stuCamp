const express = require('express');
const hostelController = require('./../controllers/hostelController');
const authController = require('./../controllers/authController');

// instantiate custom router
const router = express.Router();

router
  .route('/top-5-cheap')
  .get(hostelController.aliasTopCheap, hostelController.getAllHostels);

router
  .route('/')
  .get(authController.protect, hostelController.getAllHostels)
  .post(hostelController.createHostel);

router
  .route('/:id')
  .get(hostelController.getHostel)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'hostel-owner'),
    hostelController.updateHostel
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'hostel-owner'),
    hostelController.deleteHostel
  );

module.exports = router;
