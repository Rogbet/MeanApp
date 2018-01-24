// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'rogbet.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://roger:roger123@ds161016.mlab.com:61016/mean',
    NAMESPACE: 'http://myapp.com/roles'
  };