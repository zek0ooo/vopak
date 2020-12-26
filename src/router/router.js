const express = require('express');
const {post } = require('../controllers/controller');
const router = express.Router();
router.post('/device-config', post);
module.exports = {
  router  
}; 