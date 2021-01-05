const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const {Device, User} = require('../models/schema');
const {jsonStructure} = require('../DeviceConfigfile');
const post = (req, res)=>{
  console.log(req.body)
  try {
    validateRequest(req);
    const inputData = convert(req.files.data.data.toString().trim());
    validate(inputData);
    const ConfigFile = jsonStructure({inputData, terminalName : req.body.terminalName});
    const device = new Device({terminalName :req.body.terminalName, data : ConfigFile});
    device.save()
      .then(result => {
        res.status(201).send(result);  
        // console.log(res.socket._httpMessage.req.res.statusCode)
        // console.log(res.socket._httpMessage.req.statusCode)
      })
      .catch( err => {
        res.status(400).send(handelErrors(err));
      });
  } catch (e) {
    res.status(400).send(e.message);  
  }
};

const get = (req, res)=>{
  try {
    Device.find()
  .then(result => {
    res.send(result);
  })
  .catch(err =>{
    res.status(400).send(handelErrors(err));
  });
  }
  catch(e) {
    res.status(400).send(e.message);
  }
  
};

const postUser = (req, res)=>{
  try{
    const user = new User(req.body);
    user.save()
    .then(result => {
      res.status(201).send(result);
    })
  } catch(e) {
    // console.log(e);
    res.status(400).send(handelErrors(e));
  }
}; 


module.exports = {
  post,
  get,
  postUser
};
    
function handelErrors(e){
  // console.log(e)
    let err = '';
    Object.values(e.errors).forEach(({properties})=>{
      err =  properties.message;
    });
  return err;
}