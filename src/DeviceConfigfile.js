function jsonStructure(inputData){
    const device = [];
    inputData.forEach(element=>{
        device.push({
            DeviceName : element.DCS_Controller
            , DeviceLocation : element.OPC_Tag
            , DeviceId : element.External_line
            , DeviceType : element.DeviceType
            , EM_FLOC : element.EMFLOC
            , TerminalAssetCode : element.CM_FLOC
            , GlobalAssetID : ''
            , Tags : [
              {
                TagName : ''
                , TagType : ''
                , MeasurementType : element.Type_of_measurement
                , CM_FLOC : element.CM_FLOC
                , GlobalAssetID : ''
                , MeasurementMethod : element.MeasurementMethod
                , MeasurementSpecification : element.MeasurementSpecification
                , TagUnitOfMeasure : element.TagUnitOfMeasure
                , MeasurementUnitOfMeasure : ''
              }
            ]
        });
    })
    return device;
}; 

module.exports = {
  jsonStructure
}