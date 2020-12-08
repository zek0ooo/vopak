const {validateRequest} = require('../validators/requestValidator');
const {validateCsvData} = require('../validators/csvDataValidator');
const {convert} = require('../../src/converter');
const request = (req, res)=>{
  try {
    validateRequest(req);
  } catch (e) {
    res.status(400).send(e.message);
  }
  try {
    validateCsvData(req);
  } catch (e) {
    res.status(400).send(e.message);
  }
  convert(req);
  res.send('good test');
};

module.exports = {
  request
};
   