// const { expect } = require('chai');
// const post = require('../../src/controllers/controller');
describe('controller test', ()=>{
  // it('shoule return request status 201', ()=>{
  //   const req = {
  //     body : {
  //       terminalName : 'test'
  //     },
  //     files : {
  //       data : {
  //         mimetype : 'text/csv',
  //         data : new Buffer.from( 'DCS Controller,OPC Tag,DeviceType,EMFLOC,CM FLOC,Type of measurement,MeasurementMethod,TagUnitOfMeasure,MeasurementSpecification,External line\r\nFCS1121,T_FQR9321860.PV,pipeline,VPL19,FQR-932-18-60,flowrate,sum,MQH,,VPL19\r\nFCS1106,T_PT9321860.PV,pipeline,VPL19,PT-932-18-60,pressure,max,BARG,,VPL19\r\nFCS1121,T_PMP9321901.PV,pump,T_PMP9321901,XI-932-19-01,state,abs,,2 = RUN / 0 = STOP,VPL19'
  //         )
  //       }
  //     }
  //   };
  //   const res = {
  //     socket : {
  //       _httpMessage : {
  //         req : {
  //           res : {
  //             statusCode : 201
  //           }
  //         }
  //       }
  //     }
  //   };
  //   expect(
  //     post(req, res)
  //   ).to.be(res.socket._httpMessage.req.res.statusCode === 201);
  //   // console.log(res.socket._httpMessage.req.res.statusCode);
  // });

  // it('shoule return request status 400', ()=>{
  //   const req = {
  //     body : {
  //       terminalName : 'test'
  //     },
  //     files : {
  //       data : {
  //         mimetype : ' ',
  //         data : new Buffer.from( 'DCS Controller,OPC Tag,DeviceType,EMFLOC,CM FLOC,Type of measurement,MeasurementMethod,TagUnitOfMeasure,MeasurementSpecification,External line\r\nFCS1121,T_FQR9321860.PV,pipeline,VPL19,FQR-932-18-60,flowrate,sum,MQH,,VPL19\r\nFCS1106,T_PT9321860.PV,pipeline,VPL19,PT-932-18-60,pressure,max,BARG,,VPL19\r\nFCS1121,T_PMP9321901.PV,pump,T_PMP9321901,XI-932-19-01,state,abs,,2 = RUN / 0 = STOP,VPL19'
  //         )
  //       }
  //     }
  //   };
  //   const res = {
  //     socket : {
  //       _httpMessage : {
  //         req : {
  //           res : {
  //             statusCode : 400
  //           }
  //         }
  //       }
  //     }
  //   };
  //   expect( function () { 
  //     post(req, res);
  //   } ).to.Throw('request files.data invalid or missing. Should be a CSV file.');
  //   // .to.be(res.socket._httpMessage.req.res.statusCode === 201);
  //   // console.log(res.socket._httpMessage.req.res.statusCode);
  // });
});