const config = module.exports = {};

config.environment = process.env.NODE_ENV || 'development';

config.server = {};
config.server.port = process.env.APP_PORT || 5000;

config.app = {};
config.app.greeting = "Hello, World! From Configuration";
