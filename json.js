// const {parse} = require('json2csv');
const csvtojson = require('csvtojson');
// const csvfile = require("fs");

csvtojson().fromFile('./testc.csv').then(testc =>{
  console.log(testc);
  testc.push({
    "id": '4',
    'name': 'me',
    'age' : '28'
  });
});
   