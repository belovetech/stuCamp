const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

// initialize an express router
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.get('/', userController.getAllUser);
router.get('/:id', userController.getMe);
router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

/*
router.route('/').get(userController.getAllUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(authController.protect, userController.updateMe)
  .delete(authController.protect, userController.deleteMe);
*/
module.exports = router;
