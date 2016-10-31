const supertest = require('supertest');
const should = require('should');
const app = require('../app');

function request () {
  return supertest.agent(app.listen());
}

describe('Test controllers', () => {
  it('should return "HOME"', (done) => {
    request()
      .get('/')
      .expect(200)
      .expect('HOME', done);
  });
});
