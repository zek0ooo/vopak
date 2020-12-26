const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const {Device} = require('../models/schema');
const {jsonStructure} = require('../DeviceConfigfile');

const post = (req, res) => {
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
        console.log(err); 
      });
  } catch (e) {
    res.status(400).send(e.message);  
  }
};
module.exports = {
  post
};
    