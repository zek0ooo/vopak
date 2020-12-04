const {validateRequest} = require('../validators/requestValidator');
// const {validateParameters} = require('../validators/parametersValidator');
const request = (req, res)=>{
  try {
    validateRequest(req);
  } catch (e) {
    res.status(400).send(e.message);
  }
  // req.body?validateRequest(req):res.send('wrong terminalName');
  res.send('good test');
};

module.exports = {
  request
};
   