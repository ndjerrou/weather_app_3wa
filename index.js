import { v4 as uuidv4 } from 'uuid'; // named import

import {
  displayHistoricSearches,
  displayWeather,
  displayWeatherError,
} from './lib/DOM/display';
import { loadSearches, saveSearches } from './lib/storage/localStorage';
import fetchWeather from './lib/API/fetchWeather'; // custom file - default import
import askGeoCoordinates from './lib/DOM/api';

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const btnGeoloc = document.querySelector('button#request__localisation');

const searches = loadSearches() ?? [];

function init() {
  form.addEventListener('submit', async e => {
    // event handler
    e.preventDefault();

    const formData = new FormData(form);
    for (const val of formData.values()) {
      // fetching weather ...
      try {
        let temperature = (await fetchWeather(val)).toFixed(1);

        // display it
        displayWeather(val, temperature);

        // historic
        displayHistoricSearches(val);

        searches.push({
          id: uuidv4(),
          city: val,
          published: new Date(),
        });

        // saving into LS...
        saveSearches(searches);
      } catch (err) {
        displayWeatherError();
      }
    }

    input.value = '';
  });

  input.addEventListener('input', e => {
    if (e.target.value.length >= 4) button.disabled = false;
    else button.disabled = true;
  });

  btnGeoloc.addEventListener('click', e => {
    askGeoCoordinates();
  });

  window.addEventListener('load', e => {
    input.focus();

    if (searches) {
      for (let { city, published } of searches) {
        // @TODO : problem with old searches
        displayHistoricSearches(city, published);
      }
    }
  });
}

init();
