export default {
  meEndpoint: 'http://localhost:3001/users/',
  loginEndpoint: 'http://localhost:3001/users/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessTokens',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}

