function validate(inputData) {  
  inputData.forEach(element => {
    if ( !element.EMFLOC || !element.DeviceType || !element.DCS_Controller || !element.OPC_Tag || !element.CM_FLOC|| !element.Type_of_measurement) {
      throw new Error('inputData has invalid or missing Mandatory column.');
    }
    // if (!element.MeasurementMethod || !element.TagUnitOfMeasure || !element.MeasurementSpecification || !element.External_line ) {
    //   throw new Error('inputData has invalid or missing Optional Column.');
    // }
  });  
  
}    
module.exports = {                 
  validate
};  