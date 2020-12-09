const {validateRequest} = require('../validators/requestValidator');
const {validateCsvData} = require('../validators/csvDataValidator');
const {convert} = require('../../src/converter');
const request = (req, res)=>{
  try {
    validateRequest(req);
    const inputData = convert(req);
    validateCsvData(inputData);
  } catch (e) {
    res.status(400).send(e.message);
  }
  res.send('good test');
};

module.exports = {
  request
};
    