const config = module.exports = require('../lib/config.js');

config.env = 'testing';

config.server.port = process.env.TEST_APP_PORT || 3000;
