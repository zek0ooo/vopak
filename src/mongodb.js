const mongoose = require('mongoose');
require('dotenv').config();
const {USER1, PASSWORD, DBNAME} = process.env;
const dbURL = 'mongodb+srv://'+USER1+':'+PASSWORD+'@'+DBNAME+'.ozt4p.azure.mongodb.net/device-config?retryWrites=true&w=majority';

mongoose.connect(dbURL, {useNewUrlParser:true, useUnifiedTopology: true})
  .then( () => {
    console.log('Connected to db');
  })
  .catch((err)=>{
    console.log(err);
  });
