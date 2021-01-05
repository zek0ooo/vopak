const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  terminalName:{
    type:String,
    required : [true, 'missing terminalName']
  },
  data:{
    required:true,
    type:Object
  }
}, {timestamps: true});
const Device = mongoose.model('device-config', dataSchema );

module.exports = {
  Device
};
 
