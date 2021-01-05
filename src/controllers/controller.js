const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const {Device, User} = require('../models/schema');
const {jsonStructure} = require('../DeviceConfigfile');
const post = (req, res)=>{
  try {
    validateRequest(req);
    const inputData = convert(req.files.data.data.toString().trim());
    validate(inputData);
    const terminalName = req.body.terminalName.trim();
    const ConfigFile = jsonStructure({inputData, terminalName : terminalName});
    const device = new Device({terminalName : terminalName, data : ConfigFile});
    device.save()
      .then(result => {
        res.status(201).send(result);  
      })
      // .catch( e => {
      //   res.status(400).send(handelErrors(e));  
      // })
  }  
  catch (e) {
    res.status(400).send(handelErrors(e));  
  }
};

const get = (req, res) => {
  try {
    Device.find()
      .then(result => {
        res.send(result);
      });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const postUser = (req, res)=>{
  try {
    const user = new User(req.body);
    user.save()
      .then(result => {
        res.status(201).send(result);
      });
  } catch (e) {
    res.status(400).send(handelErrors(e));
  }
}; 




module.exports = {
  post,
  get,
  postUser
};
    
function handelErrors(e) {
  let err = '';
  Object.values(e.errors).forEach(({properties})=>{
    err =  properties.message;
  });
  return err;
}