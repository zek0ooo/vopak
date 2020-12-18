const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const {Device} = require('../models/schema');
const request = (req, res)=>{
  try {
    validateRequest(req);
    const inputData = convert(req);
    validate(inputData);
    const ConfigFile = jsonStructure(inputData);
    const device = new Device({terminalName :req.body.terminalName, data : ConfigFile});
    device.save()
      .then(result => {
        res.status(201).send(result);  
      })
      .catch( err => {
        console.log(err); 
      });
  } catch (e) {
    res.status(400).send(e.message);  
  }
  // res.send('ttt')
};

module.exports = {
  request
};
    