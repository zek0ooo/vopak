function validateCsvData(inputData) { 
  inputData.forEach(element => {
    if (!element.id || !element.age || isNaN(Number(element.id)) || isNaN(Number(element.age)) || element.age < 18 || element.age >= 100)  {
      throw new Error('inputData.id or inputData.age invalid or missing. Should be a number.');
    }
    if (!element.name || typeof(element.name) !=='string') {
      throw new Error('inputData.name invalid or missing. Should be a string.');
    }
    if (element.website && !element.website.match(/https?/) ) {
      throw new Error('inputData.website invalid or missing. Should contens a valid format.');
    } 
  }); 
}
module.exports = {          
  validateCsvData
}; 