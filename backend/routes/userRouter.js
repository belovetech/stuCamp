const express = require('express');
const authController = require('./../controllers/authController');

// initialize an express router
const router = express.Router();

router.post('/signup', authController.signUp);

module.exports = router;
