function convert(req) {
  const string = req.files.data.data.toString();
  const lines = string.split("\r\n");   
  const headers = lines[0].split(",");
  const arr = [];
  const result = [];
  for (var i=1;i<lines.length;i++) {
    const obj = {};
    const dataLine = lines[i].split(",");
    for (var j=0;j<headers.length;j++) {
      obj[headers[j]] = dataLine[j];
    }
    arr.push(obj);  
  }
  arr.forEach(element=>{
    // using parseInt(element.id) Ex 20.2 => 20  ,  using Number(element.id) Ex 20.2 => isSafeInteger(false)

    //  element.id= parseInt(element.id);
    //  element.age= parseInt(element.age);

    element.id= Number(element.id);
    element.age= Number(element.age);
    result.push(element);
  });
  return result;
} 
module.exports = {
  convert
};