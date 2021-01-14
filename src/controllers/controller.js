const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const {Device} = require('../models/schema');
const {jsonStructure} = require('../DeviceConfigfile');

const post = async (req, res)=>{
  try {
    validateRequest(req);
    const inputData = convert(req.files.data.data.toString().trim());
    validate(inputData);
    const terminalName = req.body.terminalName.trim();
    const ConfigFile = jsonStructure({inputData, terminalName : terminalName});
    const device = new Device({terminalName : terminalName, data : ConfigFile});
    const result = await device.save();
    res.status(201).send(result);  
  }  catch (e) {
    res.status(400).send(handleErrors(e));
  }
};

const getDevices = async (req, res) => {
  try {
    const result = await Device.find();
    res.send(result);
  } catch (e) {
    res.status(400).send(handleErrors(e));
  }
};

const getOneDevice = async (req, res)=>{
  try {
    const result = await Device.findOne({
      _id:req.params.id
    });
    if (result === null) {
      throw new Error('the device-config does not exist.');
    }
    res.send(result);
  } catch (e) {
    res.status(400).send(handleErrors(e));
  }
};

function handleErrors(e) {
  let err = '';
  if (e.errors) {
    Object.values(e.errors).forEach(({properties})=>{
      err =  properties.message;
    });
  } else {
    err = e.message;
  }
  return err;
}

module.exports = {
  post,
  getDevices,
  getOneDevice,
};