// const { assert } = require('chai');
const {expect} = require('chai');
const {validateRequest} = require('../../src/validators/requestValidator');
describe('filetype validate test', ()=>{
  it('should fail if only CSV file is provided', ()=>{
    const req = {
      files : {
        data: {
          mimetype:'text/csv'
        }
      }
    };

    expect(validateRequest(req)).to.be.false;
  });

  it('should fail if only terminalName is provided', ()=>{
    const req = {
      body: {
        terminalName: 'test',
      }
    };

    expect(validateRequest(req)).to.be.false;
  });

  it('should pass when all mandatory parameters are set', ()=>{
    const req = {
      body: {
        terminalName: 'test',
      },
      files : {
        data: {
          mimetype:'text/csv'
        }
      }
    };

    expect(validateRequest(req)).to.be.true;
  });

  it('should pass when all mandatory parameters are set', ()=>{
    const req = {
      body: {
        terminalName: 'test',
        extraParam: 'hello',
      },
      files : {
        data: {
          mimetype:'text/csv'
        }
      }
    };

    expect(validateRequest(req)).to.be.true;
  });
});