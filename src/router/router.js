const express = require('express');
const router = express.Router();
const {post, get, getOneDevice} = require('../controllers/controller');
router.post('/device-config', post);
router.get('/device-config', get);
router.get('/device-config/:id', getOneDevice);
module.exports = router; 
