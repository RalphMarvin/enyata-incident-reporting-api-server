const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.openweathermap.org/';

const WeatherProvider = {
  getWeatherReport: async function (city) {
    const appID = process.env.OPEN_WEATHER_APP_ID;
    const url = `data/2.5/weather?q=${city}&appid=${appID}`;

    try {
      const response = await axios.get(url);
      return response.data;
    }
    catch (e) {
      throw new Error(e);
    }
  },
};

module.exports = WeatherProvider;