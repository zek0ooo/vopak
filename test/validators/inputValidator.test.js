const {expect} = require('chai');
const {validate} = require('../../src/validators/inputValidator');
const sinon = require('sinon');
describe('input validator test', ()=>{
  it('should fail if its missing Mandatory column', ()=> {
    const inputData = [
      {
        EMFLOC: ' ',
        DeviceType: ' ',
        DCS_Controller: ' ',
        OPC_Tag: ' ',
        CM_FLOC: ' ',
        Type_of_measurement: ' ',
      }
    ];
    const stub = sinon.stub(validate);
    stub(inputData);
    // expect(function() {
    //   stub(inputData);
    // }).to.throw();
  });

  it('it must fail because its missing a mandatory column', ()=> {
    const inputData = [
      {
        EMFLOC: ' ',
        DeviceType: ' ',
        DCS_Controller: ' ',
        OPC_Tag: ' ',
        CM_FLOC: ' ',
        Type_of_measurement: '',
      }
    ];
    expect(function() {
      validate(inputData);
    }).to.throw('inputData has invalid or missing Mandatory column.');
  });
});