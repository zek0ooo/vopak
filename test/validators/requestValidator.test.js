const {expect} = require('chai');
const {validateRequest} = require('../../src/validators/requestValidator');
describe('filetype validate test', ()=>{
  it('should fail if only CSV file is provided', ()=> {
    const req = {
      files : {
        data : {
          mimetype : 'text/csv'
        }
      }
    };

    expect(function() {
      validateRequest(req);
    }).to.throw();
  });

  it('should fail if only terminalName is provided', ()=>{
    const req = {
      body: {
        terminalName: 'test',
      }
    };

    expect(function() {
      validateRequest(req);
    }).to.throw();
  });

  it('should fail when an extra parameter is set', ()=>{
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

    expect(function() {
      validateRequest(req);
    }).to.throw();
  });

  it('should pass when all mandatory parameters are set', ()=>{
    const req = {
      body: {
        terminalName: 'test',
      },
      files : {
        data: {
          mimetype:'text/csv',
        }
      }
    };

    expect(function() {
      validateRequest(req);
    }).to.not.throw();
  });
});