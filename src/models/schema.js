const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  terminalName:{
    type:String
    , required : [true, 'missing terminalName']
  },
  data:{
    required:true,
    type:Object
  }
}, {timestamps: true});
const Device = mongoose.model('device', dataSchema );

const userSchema = new mongoose.Schema({
  email : {
    type : String,
    required : [true, ' please enter email'],
    unique : false,
    lowercase : true,
    validate : [ val => {return val.includes('@'|| 'gmail') }, 'please enter valid email'],

    // phone: {
    //   type: String,
    //   validate: {
    //     validator: function(v) {
    //       return /\d{3}-\d{3}-\d{4}/.test(v);
    //     },
    //     message: props => `${props.value} is not a valid phone number!`
    //   },
    //   required: [true, 'User phone number required']
    // }
    





  },
  password: {   
    type : String,
    required : [true, 'please enter a password'],
    maxlength : [18, ' maximum password linght is 18 characters'],
    minlength : [8, ' minimum password linght is 8 characters'],
  }
}, {timestamps: true});

const User = mongoose.model('user', userSchema)


module.exports = {
  Device,
  User
};
 
