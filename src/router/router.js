const express = require('express');
const router = express.Router();
const {post, get} = require('../controllers/controller');
router.post('/device-config', post);
router.get('/device-config', get);
module.exports = router; 
 