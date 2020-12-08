function convert(req) {
  const string = req.files.data.data.toString();
  const lines = string.split("\r\n");   
  const headers = lines[0].split(",");
  const result = [];
  for (var i=1;i<lines.length;i++) {
    const obj = {};
    const dataLine = lines[i].split(",");
    for (var j=0;j<headers.length;j++) {
      obj[headers[j]] = dataLine[j];
    }
    result.push(obj);
  }
}

module.exports = {
  convert 
};