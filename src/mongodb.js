const mongoose = require('mongoose');
require('dotenv').config();
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME, MONGO_HOST} = process.env;
const dbURL = 'mongodb+srv://'+MONGO_USERNAME+':'+MONGO_PASSWORD+'@'+MONGO_HOST+'/'+MONGO_DB_NAME+'?retryWrites=true&w=majority';

mongoose.connect(dbURL, {useNewUrlParser:true, useUnifiedTopology: true})
  .then( () => {
    console.log('Connected to db');
  })
  .catch((err)=>{
    console.log(err); 
  });
