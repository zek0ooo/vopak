function jsonStructure(inputData) {
  const device = [];
  inputData.forEach(element=> {
    device.push({
      DeviceName : element.External_line,
      DeviceLocation :'',
      DeviceId : element.EMFLOC,
      DeviceType : element.DeviceType,
      EM_FLOC : element.EMFLOC,
      // TerminalAssetCode : '',
      // GlobalAssetID : '',
      Tags:[]
    });
    device.forEach(val=>{
      if (val.DeviceType==element.DeviceType) {
        val.Tags.push({
          TagName : element.DCS_Controller +'!'+ element.OPC_Tag,
          TagType : element.Type_of_measurement,                   
          MeasurementType : element.Type_of_measurement,           
          TagUnitOfMeasure :element.TagUnitOfMeasure,             
          MeasurementUnitOfMeasure : element.TagUnitOfMeasure,    
          MeasurementDescription : element.MeasurementSpecification,
          // CM_FLOC : element.CM_FLOC,
          // GlobalAssetID : '',
          // MeasurementMethod : '',
          // MeasurementSpecification : '',
          // MeasurementUnitOfMeasure : '',
        });
      }
    });
  });
  return device;
}

module.exports = {
  jsonStructure
};
