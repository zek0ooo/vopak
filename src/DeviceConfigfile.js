function jsonStructure(inputData){
  const obj = {
    Devices:[
        {
            "DeviceName": "EastArea.Tank0",
            "DeviceLocation": "nlttr",
            "DeviceId": "EastArea.Tank0",
            "DeviceType": "Tank",
            "EM_FLOC": "TANK0",
            "TerminalAssetCode": "XYZ",
            "GlobalAssetID": "xyz",
            "Tags": [
              {
                "TagName": "EastArea.Tank0.level",
                "TagType": "level",
                "MeasurementType": "level",
                "CM_FLOC": "T0_LEVEL",
                "GlobalAssetID": "xyz1",
                "MeasurementMethod": "ullage",
                "MeasurementSpecification": "with high temperature",
                "TagUnitOfMeasure": "CM",
                "MeasurementUnitOfMeasure": "CM"
              },
              {
                "TagName": "EastArea.Tank0.clock",
                "TagType": "clock",
                "MeasurementType": "clock",
                "CM_FLOC": "T0_CLOCK",
                "GlobalAssetID": "xyz2",
                "MeasurementMethod": "stopwatch",
                "MeasurementSpecification": "UTC",
                "TagUnitOfMeasure": "UTC",
                "MeasurementUnitOfMeasure": "UTC"
              }
            ]
        }
                
          
      
    ]
  };
};

module.exports = {
  jsonStructure
}