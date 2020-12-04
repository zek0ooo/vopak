const {validateRequest} = require('../validators/requestValidator');
// const {validateParameters} = require('../validators/parametersValidator');
const request = (req, res)=>{
  req.files?validateRequest(req):res.send('no files');
  // req.body?validateRequest(req):res.send('wrong terminalName');
  res.send('good test');
  
};

module.exports = {
  request
};
   