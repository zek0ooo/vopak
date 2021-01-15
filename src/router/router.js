const express = require('express');
const router = express.Router();
// const okta = require('@okta/okta-sdk-nodejs');
const {post, getDevices, getOneDevice} = require('../controllers/controller');
const { OKT_Client_ID, OKTA_Client_secret} = process.env;

// router.use( (req, res, next) => {
//   if (req.headers.client !== OKT_Client_ID || req.headers.pass !== OKTA_Client_secret) {
//     return res.status(400).send('Unauthorized request');
//   }
//   return next();
// });
router.post('/device-config', post);
router.get('/device-config',  getDevices); 
router.get('/device-config/:id', getOneDevice);
module.exports = router; 
