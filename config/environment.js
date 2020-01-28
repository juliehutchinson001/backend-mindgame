// Setup environment
const currentEnvironment = process.env.NODE_ENV || 'development';

// Sets env variables when not in production
module.exports = () => {
  if (currentEnvironment === 'development') {
    const secretKeys = require('./keys');
    const environmentVars = secretKeys[currentEnvironment];

    Object.keys(environmentVars).forEach(envVar => {
      process.env[envVar] = environmentVars[envVar];
    });
  }
};
