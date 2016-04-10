let http = require('http');
let expect = require('chai').expect

require('../lib/index.js');

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3000', res => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
