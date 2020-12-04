const express = require('express');
const app = express();
const router = require('./src/router/router');
const fileupload = require('express-fileupload');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileupload());
app.use(router);
app.listen(5000, ()=>{
  console.log('server is on'); 
});
