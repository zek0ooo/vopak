function validateRequest(req) {
  validateFileParameter(req);
  validateTerminalName(req);
  validateNoExtraParameters(req);

  return true;
}

function validateFileParameter(req) {
  if (req.files === undefined || req.files === null || req.files.data === undefined || req.files.data.mimetype !== 'text/csv') {
    throw new Error('request files.data invalid or missing. Should be a CSV file.');
  }
}

function validateTerminalName(req) {
  if (req.body === undefined || req.body.terminalName === undefined || req.body.terminalName === ''  || (typeof req.body.terminalName !== 'string')) {
    throw new Error('request body.terminalName invalid or missing. Should be a string.');
  }
}

function validateNoExtraParameters(req) {
  if ( Object.entries(req.body).length !== 1 ) { 
    throw new Error('request body have extra parameter ');
  }
  return true;
}

module.exports = { 
  validateRequest
};