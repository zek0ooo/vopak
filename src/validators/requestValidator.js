const validFields = {
  body: [
    'terminalName',
  ],
  files: [
    'data',
  ]
};

function validateRequest(req) {
  return validateFileParameter(req) && validateTerminalName(req) && validateNoExtraParameters(req);
}

function validateFileParameter(req) {
  return req.files !== undefined && req.files.data !== undefined && req.files.data.mimetype === 'text/csv';
}

function validateTerminalName(req) {
  return req.body !== undefined && req.body.terminalName !== undefined && (typeof req.body.terminalName === 'string');
}

function validateNoExtraParameters(req) {
  return true;
}

module.exports = { 
  validateRequest
};