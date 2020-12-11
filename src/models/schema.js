const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  terminalName:{
    type:String,
    required:true
  },
  data:{
    required:true,
    type:Array
  }
}, {timestamps: true});
const Device = mongoose.model('device', dataSchema );
module.exports = {
  Device
};