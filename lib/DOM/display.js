export const displayWeather = (city, temp) => {
  document.querySelector('div#error__temperature').innerHTML = ``;

  document.querySelector(
    'div#infos__temperature'
  ).innerHTML = `<p>Il fait ${temp}° à ${city}`;
};
export const displayWeatherError = () =>
  (document.querySelector(
    'div#error__temperature'
  ).innerHTML = `<p style="color: red; font-weight: bold">Plz retry</p>`);

export const displayHistoricSearches = (city, date = new Date()) =>
  (document.querySelector('div#searches__history > ul').innerHTML += `<li>${
    city[0].toUpperCase() + city.slice(1)
  } - ${date}</li>`);
