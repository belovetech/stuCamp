const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();
router.get('/', viewController.getOverview);
router.get('/login', viewController.getLoginForm);

router.get('/hostel', authController.protect, viewController.getAllHostel);
router.get('/hostel/:slug', viewController.getHostel);

module.exports = router;
