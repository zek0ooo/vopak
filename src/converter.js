function convert(req) {
  const string = req.files.data.data.toString();
  const lines = string.split("\r\n");   
  const firstLine = lines[0].split(',');
  const headers = [];
  for (let i = 0; i < firstLine.length; i++) {
    headers.push(firstLine[i].replace(/ /g, '_'));
  }
  const jsonArray = [];
  const errors= [];
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const dataLine = lines[i].split(",");
    if (dataLine.length !== headers.length) {
      errors.push('error on line '+(i+1)+' expected '+headers.length+' but got '+dataLine.length);
      continue;
    }
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = dataLine[j];
    }
    jsonArray.push(obj);  
  } 
  if (errors.length > 0) {
    throw new Error (errors);
  }
  return jsonArray;
} 
module.exports = {
  convert
};