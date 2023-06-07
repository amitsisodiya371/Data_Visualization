const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataControllers');

// Fetch all data
router.get('/', dataController.getAllData);

module.exports = router;
