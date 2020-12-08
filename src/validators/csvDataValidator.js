const csvTojson = require('csvtojson');
function validateCsvData(req) { 
  bufferTostring(req); 
  return true; 
}
function bufferTostring(req) { 
  const string = req.files.data.data.toString();
  if ((typeof string !== 'string') ) {
    throw new Error('converting buffer to string failde.');
  } 
  ss(string);
}   
function ss(string) {
  csvTojson().fromString(string)
    .then(res=>{
      // console.log(res, 'res');
      convert(res);
    })
    .catch(err=>{
      console.log(err);  
    });
  const convert=(res)=>{
    if ( !res ) {
      throw new Error('converting string to json object failde .');
    } else {
      // console.log(res)
    }
    console.log(...res);
    mm(res);
  };
}
function mm(res) {
  console.log(res);
}
module.exports = {     
  validateCsvData
};