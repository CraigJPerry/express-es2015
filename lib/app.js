module.exports = function(config) {
  config = config || {};
  const express = require('express');
  const app = express();

  if ('development' === process.env.NODE_ENV) {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  }

  app.get('/', (req, res) => {
    if (config.app.greeting) {
      res.send(config.app.greeting);
    } else {
      res.send('Hello World!');
    }
  });

  return app
}
