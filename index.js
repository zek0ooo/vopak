const express = require('express');
// const requestValidator = require('./src/requestValidator');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/device-config', (req, res)=>{});

app.listen(5000, ()=>{
  console.log('hello'); 
});
