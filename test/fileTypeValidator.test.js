const { assert } = require('chai');
const {validateRequest} = require('../src/validators/requestValidator');
describe('filetype validate test', ()=>{
  it('file type most be text/csv', ()=>{
    const req = {files :{data:{mimetype:'text/csv'}}};
    assert.equal( validateRequest(req).testFileType, 'ok');
  });
});