const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

// initialize an express router
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword', authController.resetPassword);

router.route('/').get(userController.getAllUser);

module.exports = router;
