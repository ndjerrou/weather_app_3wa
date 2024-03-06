import axios from 'axios';
import fetchWeather from './fetchWeather';

const BASE_URL = 'https://api.geoapify.com/v1/geocode/reverse';

export default async (lat, lon) => {
  try {
    const {
      data: { results },
    } = await axios(BASE_URL, {
      params: {
        lat,
        lon,
        apiKey: process.env.API_KEY_GEOCODING,
        format: 'json',
      },
    });

    const city = results[0].city;

    const temperature = await fetchWeather(city);

    console.log(temperature);
  } catch (err) {
    console.log(err.message);
  }
};
