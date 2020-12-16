function convert(req) {
  const string = req.files.data.data.toString();
  const lines = string.split("\r\n");   
  const firstLine = lines[0].split(",");
  const headers = [];
  firstLine.forEach(val => {
    const arr = val.split(' ');
    let [name] = arr;
    for (let i = 0; i < arr.length; i++) {
      if (name !== arr[i]) {
        name +='_'+ arr[i];
      }
    }
    headers.push(name);
  });

  const jsonArray = [];
  const errors= [];
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const dataLine = lines[i].split(",");
    if(dataLine.length !== headers.length){
      errors.push('error on line '+(i+1)+' expected '+headers.length+' but got '+dataLine.length)
      continue
    }
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = dataLine[j];
    }
    jsonArray.push(obj);  
  }
  return jsonArray;
} 
module.exports = {
  convert
};