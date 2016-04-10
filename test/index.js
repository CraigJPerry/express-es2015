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

describe('CRUD Things', () => {
  it('should create new things');
  it('should refuse to create existing things');
  it('should list all things');
  it('should filter the list of things');
  it('should update an existing thing');
  it('should refuse to update a non-existing thing');
  it('should delete the chosen thing');
});
