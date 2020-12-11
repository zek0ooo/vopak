const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const {Device} = require('../models/schema');
const request = (req, res)=>{
  try {
    validateRequest(req);
    const inputData = convert(req);
    validate(inputData.data);
    const device = new Device(inputData);
    device.save()
      .then(result => {
        const obj = {
          terminalName : result.terminalName,
          data : result.data
        };
        res.status(200).send(obj);
      })
      .catch( err => {
        console.log(err);
      });
  } catch (e) {
    res.status(400).send(e.message);  
  }
};

module.exports = {
  request
};
    