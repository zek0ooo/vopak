const express = require('express');
const router = express.Router();
// const okta = require('@okta/okta-sdk-nodejs');

const {post, getDevices, getOneDevice} = require('../controllers/controller');
const { OKT_Client_ID, OKTA_Client_secret} = process.env;
router.use( (req, res, next) => {
  try {
    if (req.headers.client == OKT_Client_ID && req.headers.pass == OKTA_Client_secret) {
      next();
    }  else { 
      throw new Error('bad request');
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});
router.post('/device-config', post);
router.get('/device-config',  getDevices); 
router.get('/device-config/:id', getOneDevice);



// const client = new okta.Client({
//   orgUrl: 'https://dev-1234.oktapreview.com/',
//   token: 'xYzabc'    // Obtained from Developer Dashboard
// });

// const client = new okta.Client({
//     orgUrl: OKTA_api,
//     authorizationMode: 'PrivateKey',
//     clientId: OKT_Client_ID,
//     scopes: ['okta.users.manage'],
//     privateKey: '{JWK}' // <-- see notes below
//   });
module.exports = router; 
