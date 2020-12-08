const {expect} = require('chai');
const {csvDataValidator} = require('../../src/validators/csvDataValidator');
describe('csvData validate test', ()=>{
  it('should fail if buffer is not provided', ()=> {
    const test = new Buffer.from('stream of binary data');
    const req = {
      files : {
        data : {
          data : 'test'
        }
      }
    };
    expect(function() {
      csvDataValidator(req);
    }).to.throw();
  });
  it('should fail if not json type', ()=>{

  });
});