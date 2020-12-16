function convert(req) {
  const string = req.files.data.data.toString();
  const lines = string.split("\r\n");   
  const headers = lines[0].split(",");
  const jsonArray = [];
  const result = {
    terminalName:req.body.terminalName,
    data:[]
  };
  for (var i=1;i<lines.length;i++) {
    const obj = {};
    const dataLine = lines[i].split(",");
    for (var j=0;j<headers.length;j++) {
      obj[headers[j]] = dataLine[j];
    }
    jsonArray.push(obj);  
  }
  jsonArray.forEach(element=>{
    element.id = Number(element.id);
    element.age = Number(element.age);
    result.data.push(element);
  });
  return result;
} 
module.exports = {
  convert
};