const express = require('express');
const app = express();
const router = require('./src/router/router');
const fileupload = require('express-fileupload');
require('./src/mongodb');
require('dotenv').config();
const {API_PORT, API_HOST} = process.env;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileupload());
app.use(router);
app.listen(API_PORT, API_HOST, ()=>{
  console.log('Server is on');  
});
