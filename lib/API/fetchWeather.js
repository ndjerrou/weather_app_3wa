import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default city =>
  axios(BASE_URL, {
    params: {
      q: city,
      appid: process.env.API_KEY_OWM,
      units: 'metric',
      lang: 'fr',
    },
  }).then(
    ({
      data: {
        main: { temp: temperature },
      },
    }) => temperature
  );
