const {expect} = require('chai');
const {convert} = require('../src/converter');

describe('converter test', () => {
  it('should pass with all correct data', () => {
    const input = [
      'DCS Controller,OPC Tag,DeviceType,EMFLOC,CM FLOC,Type of measurement,MeasurementMethod,TagUnitOfMeasure,MeasurementSpecification,External line',
      'FCS1121,T_FQR9321860.PV,pipeline,VPL19,FQR-932-18-60,flowrate,sum,MQH,,VPL19',
      'FCS1106,T_PT9321860.PV,pipeline,VPL19,PT-932-18-60,pressure,max,BARG,,VPL19',
      'FCS1121,T_PMP9321901.PV,pump,T_PMP9321901,XI-932-19-01,state,abs,,2 = RUN / 0 = STOP,VPL19'
    ];
    expect(convert(input.join("\r\n"))).is.an('array');
  });

  it('should catch two errors when data is incorrect', () => {
    const input = [
      "header1,header2,header3",
      "column1",
      "column1,column2",
      "column1,column2,column3",
    ];

    expect(function () {
      convert(input.join("\r\n"));
    }).to.throw("Error: error on line 2 expected 3 but got 1, Error: error on line 3 expected 3 but got 2");
  });
});