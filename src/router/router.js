const express = require('express');
const router = express.Router();
const {request} = require('../controllers/controller');
router.post('/device-config', request);

module.exports = router; 