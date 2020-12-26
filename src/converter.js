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

module.exports = {
  convert
};