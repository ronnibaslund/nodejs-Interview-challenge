// Test specific configuration
const testConfig = {
  port: process.env.PORT || 9002,

  mongo: {
    uri: 'mongodb://localhost/nodejs-interview-challenge',
    debug: false
  }
};

module.exports = testConfig;
