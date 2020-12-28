const express = require('express');
const router = express.Router();
const {post, get, postUser} = require('../controllers/controller');
router.post('/device-config', post);
router.post('/device-config/login', postUser);
router.get('/device-config', get);
module.exports = router; 