function jsonStructure(inputData) {
  const devices = [];
  inputData.forEach(dataRow => {
    createTag(dataRow);
  });
  function createDevice(data) {
    const device = {};
    device.DeviceName = data.EMFLOC;
    device.DeviceLocation ='';
    device.DeviceId = data.EMFLOC;
    device.DeviceType = data.DeviceType;
    device.EM_FLOC = data.EMFLOC;
    // TerminalAssetCode = '';
    // GlobalAssetID = '';
    device.Tags=[];
    devices.push(device);
    return device;
  }
  function createTag(data) {
    const device = devices.find(device => device.EM_FLOC === data.EMFLOC) || createDevice(data);
    const tag = {};
    tag.TagName = data.DCS_Controller +'!'+ data.OPC_Tag;
    tag.TagType = data.Type_of_measurement;                   
    tag.MeasurementType = data.Type_of_measurement;           
    tag.TagUnitOfMeasure =data.TagUnitOfMeasure;             
    tag.MeasurementUnitOfMeasure = data.TagUnitOfMeasure;    
    tag.MeasurementDescription = data.MeasurementSpecification;
    tag.CM_FLOC = data.CM_FLOC;
    // tag.GlobalAssetID = '';
    // tag.MeasurementMethod = '';
    // tag.MeasurementSpecification = '';
    // tag.MeasurementUnitOfMeasure = '';
    device.Tags.push(tag);
  }
  return devices;
}

module.exports = {
  jsonStructure
};
