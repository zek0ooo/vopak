const express = require('express');
const {request} = require('../controllers/controller');
const router = express.Router();
router.post('/device-config', request);

module.exports = {
  router  
}; 