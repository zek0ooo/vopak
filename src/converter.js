// const { validate } = require("./validators/inputValidator");

function convert(string) {
  const lines = string.split("\r\n");   
  const firstLine = lines[0].split(',');
  const headers = [];
  
  for (let i = 0; i < firstLine.length; i++) {
    headers.push(firstLine[i].replace(/ /g, '_'));
  }
  const jsonArray = [];
  const errors = [];
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const dataLine = lines[i].split(",");
    // let error = validateRow(dataLine, headers, i);
    // validateRow(dataLine, headers, i)?errors.push(error):console.log(error)
    // validateRow(dataLine, headers, i)?console.log(validateRow(dataLine, headers, i)):console.log(error)
    // console.log(errors)
    errors.push(validateRow(dataLine, headers, i))
    
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = dataLine[j];
    }
    jsonArray.push(obj);  
    // return errors
  } 
  
  console.log(errors)
  if (errors.length > 0 && errors !==undefined) {
    throw new Error (errors);
  }
  return jsonArray;
} 

function validateRow(dataLine, headers, i) {
  let error;
  if (dataLine.length !== headers.length) {
    error =  'error on line '+(i+1)+' expected '+headers.length+' but got '+dataLine.length;
  }
  return error
}


// function test(dataLine, headers, i) {
//   const error = 'error on line '+(i+1)+' expected '+headers.length+' but got '+dataLine.length;
//   return error;
//   // if (dataLine.length !== headers.length === true) {
//   //   return 'error on line '+(i+1)+' expected '+headers.length+' but got '+dataLine.length;
//   // }
// }
// function sendError(errors) {
//   // console.log(errors)
//   throw new Error (errors);
// }

// function validateRow(dataLine, headers) {
//   // const test = dataLine.length !== headers.length;
//   // if (dataLine.length !== headers.length) {
//   //   return true;
//   // }
//   // console.log(test)
//   return dataLine.length !== headers.length;
// }
module.exports = {
  convert,
  // test,
  // sendError,
  validateRow
};