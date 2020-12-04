function validateRequest(req) {
  const fileType = req.files.data.mimetype;
  const testFileType = fileType === 'text/csv'?'ok':'not ok';
  
 

  
  // const name = req.body.terminalName;
  // const testTerminalName = name === String?'ok':'not ok'; 
  return {testFileType};
}


module.exports = { 
  validateRequest
};   