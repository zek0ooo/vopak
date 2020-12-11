const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://zek0ooo:zek0ooo.123@pachachaca.ozt4p.azure.mongodb.net/device-config?retryWrites=true&w=majority';

mongoose.connect(dbURL, {useNewUrlParser:true, useUnifiedTopology: true})
  .then( ( ) => {
    console.log('connect to db');
  })
  .catch((err)=>{
    console.log(err);
  });
