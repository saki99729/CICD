const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Example route that uses the controller
router.get('/data', apiController.getData);

router.get('/data/new', apiController.newGetData);

module.exports = router;
