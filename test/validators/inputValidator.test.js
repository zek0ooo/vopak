const {expect} = require('chai');
const {validate} = require('../../src/validators/inputValidator');
describe('input validator test', ()=>{
  it('should fail if its missing Mandatory column', ()=> {
    const inputData = [
      {
        EMFLOC: '',
        DeviceType: '',
        DCS_Controller: '',
        OPC_Tag: '',
        CM_FLOC: '',
      }
    ];
    expect(function() {
      validate(inputData);
    }).to.throw();
  });

  it('should pass when all mandatory parameters are set', ()=> {
    const inputData = [
      {
        EMFLOC: '',
        DeviceType: '',
        DCS_Controller: '',
        OPC_Tag: '',
        CM_FLOC: '',
        Type_of_measurement: '',
      }
    ];
    expect(function() {
      validate(inputData);
    }).to.throw();
  });
});