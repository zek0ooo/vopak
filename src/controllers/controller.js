const {validateRequest} = require('../validators/requestValidator');
const {validate} = require('../validators/inputValidator');
const {convert} = require('../../src/converter');
const request = (req, res)=>{
  try {
    validateRequest(req);
    const inputData = convert(req);
    validate(inputData);
  } catch (e) {
    res.status(400).send(e.message);
  }
  res.send('good test');
};

module.exports = {
  request
};
    