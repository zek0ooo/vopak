require('dotenv').config()
const FormData = require('form-data');
const axios = require('axios');
const btoa = require('btoa');

const { OKTA_ISSUER, OKTA_CLIENT_ID, OKTA_CLIENT_SECRET, OKTA_SCOPE } = process.env

const sendAPIRequest = async () => {
  const token = btoa(`${OKTA_CLIENT_ID}:${OKTA_CLIENT_SECRET}`)
  // try {

  const bodyFormData = new FormData();
  bodyFormData.append('grant_type', 'client_credentials');
  bodyFormData.append('scope', OKTA_SCOPE);

  const params = {
    url: `${OKTA_ISSUER}/v1/token`,
    method: 'POST',
    headers: {
      authorization: `Basic ${token}`,
      'Content-Type': 'multipart/form-data'
    },
    data: bodyFormData
  };

  console.log(params);

    axios(params).then((response) => {
      console.log(response);
    }).catch(async (e) => {
      console.log(e);
    });

    // console.log(auth);

    // const response = await request({
    //   uri,
    //   method,
    //   body,
    //   headers: {
    //     authorization: `${auth.token_type} ${auth.access_token}`
    //   }
    // })
    //
    // console.log(response)
  // } catch (error) {
  //   console.log(`Error: ${error.message}`)
  // }
}

sendAPIRequest().then(() => {
  console.log('done');
});