// const { validate } = require("./validators/inputValidator");

function convert(string) {
  const lines = string.split("\n");
  const firstLine = lines[0].split(',');
  const headers = [];
  
  for (let i = 0; i < firstLine.length; i++) {
    headers.push(firstLine[i].replace(/ /g, '_'));
  }
  const jsonArray = [];
  const errors = [];
  for (let i = 1; i < lines.length; i++) {
    try {
      const dataLine = lines[i].split(",");
      jsonArray.push(validateRow(dataLine, headers, i));
    } catch (e) {
      errors.push(e);
    }
  } 

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }

  return jsonArray;
} 

function validateRow(dataLine, headers, i) {
  const obj = {};

  if (dataLine.length !== headers.length) {
    throw new Error('error on line '+(i+1)+' expected '+headers.length+' but got '+dataLine.length);
  }

  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = dataLine[j];
  }

  return obj;
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