const config = require('./config');
const app = require('../lib/app')(config);

const http = require('http');
const expect = require('chai').expect

app.listen(config.server.port, () => {
  console.log('Test app instance listening on port [%s]!', config.server.port);
});

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:' + config.server.port, res => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
