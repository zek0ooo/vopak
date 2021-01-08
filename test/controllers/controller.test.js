const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { mockReq, mockRes } = require('sinon-express-mock');

const requestValidator = require('../../src/validators/requestValidator');
const inputValidator = require('../../src/validators/inputValidator');
const converter = require('../../src/converter');
const schema = require('../../src/models/schema');
const DeviceConfigfile = require('../../src/DeviceConfigfile');

const controller = require('../../src/controllers/controller');

chai.use(sinonChai);

describe('controller test', () => {
  beforeEach(() => {
    sinon.stub(converter, "convert").returns({});
    sinon.stub(DeviceConfigfile, "jsonStructure").returns({Devices: [{EM_FLOC: 'emFlocTest', tags: [{CM_FLOW: 'cmFlocTest'}]}]});

    const deviceSaveStub = sinon.stub().resolves({_id: 'i-am-an-id'});
    sinon.stub(schema, "Device").returns({save: deviceSaveStub});
  });

  afterEach(() => {
    sinon.restore();
  });

  it ('should return a 400 if an error is thrown in the requestValidator', async () => {
    const req = mockReq(request);
    const res = mockRes();

    const errorMessage = "ValidateRequest validation error";
    const error = new Error(errorMessage);

    sinon.stub(requestValidator, "validateRequest").throws(error);

    await controller.post(req, res);

    chai.expect(res.status).to.be.calledWith(400);
    chai.expect(res.send).to.be.calledWith(errorMessage);
  });

  it ('should return a 400 if an error is thrown in the inputValidator', () => {
    const req = mockReq(request);
    const res = mockRes();

    const errorMessage = "InputValidator validation error";
    const error = new Error(errorMessage);

    sinon.stub(requestValidator, "validateRequest");
    sinon.stub(inputValidator, "validate").throws(error);
    controller.post(req, res);

    chai.expect(res.status).to.be.calledWith(400);
    chai.expect(res.send).to.be.calledWith(errorMessage);
  });

  it ('should return a 201 if no errors are thrown in the business logic functions', async () => {
    const req = mockReq(request);
    const res = mockRes();

    sinon.stub(requestValidator, "validateRequest");
    sinon.stub(inputValidator, "validate");

    await controller.post(req, res);

    chai.expect(res.status).to.be.calledWith(201);
    chai.expect(res.send).to.be.calledWith({_id: 'i-am-an-id'});
  });
});

const request = {
  body: {
    terminalName: 'testTerminalName',
  },
  files: {
    data: {
      data: [
        "header1,header2",
        "row1,row2"
      ].join("\n")
    }
  }
};