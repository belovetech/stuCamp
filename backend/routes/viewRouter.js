const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/hostel', viewController.getAllHostel);
router.get('/hostel/:slug', viewController.getHostel);

module.exports = router;
