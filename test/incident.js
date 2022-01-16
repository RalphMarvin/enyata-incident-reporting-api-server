const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./../src/index');

const should = chai.should();
chai.use(chaiHttp);

describe('Incidents', () => {
  describe('POST /incident', () => {
    it('it should post incident successfully', (done) => {
      let body = {
        client_id: 123456,
        incident_desc: 'Bad incident',
        city: 'Accra',
        country: 'Ghana'
      };

      chai.request(app)
        .post('/incident')
        .send(body)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });
  });

  describe('POST /incident', () => {
    it('it should not post incident because of missing required fields', (done) => {
      let body = {
        incident_desc: 'Bad incident',
        city: 'Accra',
        country: 'Ghana'
      };

      chai.request(app)
        .post('/incident')
        .send(body)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.have.be.a('object');
          res.body.should.have.property('errors');
          done();
        });
    });
  });

  describe('GET /incidents', () => {
    it('it should get a list of all incidents', (done) => {
      chai.request(app)
        .get('/incidents')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.be.a('array');
          chai.expect(res.body[0]).to.have.property('client_id');
          chai.expect(res.body[1]).to.have.property('incident_desc');
          chai.expect(res.body[2]).to.have.property('city');
          chai.expect(res.body[3]).to.have.property('country');
          chai.expect(res.body[5]).to.have.property('weather_report');
          chai.expect(res.body[4]).to.have.property('date');
          done();
        });
    });
  });
});