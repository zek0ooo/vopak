const {validateRequest} = require('../validators/requestValidator');
// const {validateParameters} = require('../validators/parametersValidator');
const request = (req, res)=>{
  if (!validateRequest(req)) {
    res.send('invalid request');
  }
  // req.body?validateRequest(req):res.send('wrong terminalName');
  res.send('good test');
  
};

module.exports = {
  request
};
   