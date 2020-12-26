const {jsonStructure} = require('../src/DeviceConfigfile');
const {expect} = require('chai');
describe('jsonStructure test', () => {
  it('should return correct Structure', () => {
    const terminalName = 'terminalName';
    const inputData = [
      {
        DCS_Controller: 'FCS1121',
        OPC_Tag: 'T_PMP9321901.PV',
        DeviceType: 'pump',
        EMFLOC: 'T_PMP9321901',
        CM_FLOC: 'XI-932-19-01',
        Type_of_measurement: 'state',
        MeasurementMethod: 'abs',
        TagUnitOfMeasure: '',
        MeasurementSpecification: '2 = RUN / 0 = STOP',
        External_line: 'VPL19'
      },
    ];
    const input = {inputData, terminalName};
    expect(jsonStructure(input)).is.an('array');
  });
});

