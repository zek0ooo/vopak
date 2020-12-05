const {validateRequest} = require('../validators/requestValidator');
const request = (req, res)=>{
  try {
    validateRequest(req);
  } catch (e) {
    res.status(400).send(e.message);
  }
  res.send('good test');
};

module.exports = {
  request
};
   