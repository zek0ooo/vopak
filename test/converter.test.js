const {expect} = require('chai');

const {convert, validateRow} = require('../src/converter');


describe('converter test', ()=>{
  beforeEach( () => {
    this.data = {
      string : 'DCS Controller,OPC Tag,DeviceType,EMFLOC,CM FLOC,Type of measurement,MeasurementMethod,TagUnitOfMeasure,MeasurementSpecification,External line\r\nFCS1121,T_FQR9321860.PV,pipeline,VPL19,FQR-932-18-60,flowrate,sum,MQH,,VPL19\r\nFCS1106,T_PT9321860.PV,pipeline,VPL19,PT-932-18-60,pressure,max,BARG,,VPL19\r\nFCS1121,T_PMP9321901.PV,pump,T_PMP9321901,XI-932-19-01,state,abs,,2 = RUN / 0 = STOP,VPL19',
      headers : ['DCS Controller', 'OPC Tag', 'DeviceType', 'EMFLOC', 'CM FLOC', 'Type of measurement'],
      row : ['FCS1121', 'T_PMP9321901.PV', 'pump', 'T_PMP9321901', 'XI-932-19-01', 'state'],
      errors : ['error on line 2 expected 10 but got 9', 'error on line 3 expected 10 but got 9']
    };
    
  });
  it('setting headers', () => {
    expect(convert(this.data.string)).is.an('array');
  });
  // it('create error', () => {
  //   expect(new test(this.data.headers, this.data.row, 1)).to.be.a('string');
  //
  // });

  // it('send error', () => {
  //   expect(new sendError(this.data.errors)).to.throw();
  //
  // });it('send error', () => {
  //   expect(new sendError(this.data.errors)).to.throw();
  //
  // });
  it('send errorrrrrrrrrr', () => {
    expect(function() {
      validateRow([], ['test', 'test2'], 1);
    }).to.throw();
  });
});



//   it('line validation returns true when line has same amount of columns as the header', ()=> {
//    // Arrange
//     line = "test,test1,test3";
//     lines = [{line}];
//     headersLength = 3;    
   
//     expect(function() {
//       // Act
//       lineIdValid(lines,headersLength);
//     }).to.equal(true); // Assert
//   })

//   it('line validation returns false when line does not have the same amount of columns as the header', ()=> {
//     // Arrange
//      line = "test,test1,test3";
//      lines = [{line}];
//      headersLength = 4;    
    
//      expect(function() {
//        // Act
//        lineIdValid(lines,headersLength);
//      }).to.equal(false); // Assert
//    })

//    it('spaces in the header columns are replced with underscore', ()=> {
//     // Arrange
//      firstline = "some header,header2,header3";
      
//      expect(function() {
//        // Act
//        lineIdValid(firstline);
//      }).to.equal(false); // Assert
//    })