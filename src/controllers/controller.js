const requestValidator = require('../validators/requestValidator');
const inputValidator = require('../validators/inputValidator');
const converter = require('../../src/converter');
const schema = require('../models/schema');
const DeviceConfigfile = require('../DeviceConfigfile');

const post = async (req, res)=>{
  try {
    requestValidator.validateRequest(req);
    const inputData = converter.convert(req.files.data.data.toString().trim());
    inputValidator.validate(inputData);
    const terminalName = req.body.terminalName.trim();
    const ConfigFile = DeviceConfigfile.jsonStructure({inputData, terminalName : terminalName});
    const device = new schema.Device({terminalName : terminalName, data : ConfigFile});
    const result = await device.save();
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send(handleErrors(e));
  }
};

const getDevices = async (req, res) => {
  try {
    const result = await schema.Device.find();
    res.send(result);
  } catch (e) {
    res.status(400).send(handleErrors(e));
  }
};

const getOneDevice = async (req, res)=>{
  try {
    const result = await schema.Device.findOne({
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