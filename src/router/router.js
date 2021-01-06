const express = require('express');
const router = express.Router();
const {post, getDevices, getOneDevice} = require('../controllers/controller');
router.post('/device-config', post);
router.get('/device-config', getDevices);
router.get('/device-config/:id', getOneDevice);
module.exports = router; 
