const chai = require('chai');
const chaiHttp = require('chai-http');
const WeatherProvider = require('../src/helper/weather');

chai.use(chaiHttp);

describe('Weather', () => {
  describe('Get weather', () => {
    it('it should get weather info successfully', async () => {
      const city = 'Accra';
      const response = await WeatherProvider.getWeatherReport(city);
      chai.expect(response).to.be.a('object');
      chai.expect(response).to.have.property('weather');
      chai.expect(response).to.have.property('coord');
      chai.expect(response).to.have.property('base');
      chai.expect(response).to.have.property('main');
      chai.expect(response).to.have.property('name');
    });
  });
});