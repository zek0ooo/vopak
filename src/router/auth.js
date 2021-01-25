const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ISSUER,
  clientId: process.env.OKTA_CLIENT_ID
});
module.exports = async (req, res, next) => { 
  try { 
    const { authorization } = req.headers;
    if (!authorization) throw new Error('You must send an Authorization header');
    const [authtype, token] =  authorization.trim().split(' ');
    if (authtype !== 'Bearer') throw new Error('Expected a Bearer token');
    const { claims } = await oktaJwtVerifier.verifyAccessToken(token, 'api://default');
    if (!claims.scp.includes(process.env.OKTA_SCOPE)) {
      throw new Error('Could not verify the proper scope');
    }
    next();
  } catch (error) {
    next(error.message);
  }
};