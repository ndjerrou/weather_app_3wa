import calculateCity from '../API/calculateCity';

export default function askGeoCoordinates() {
  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => calculateCity(latitude, longitude),
    err => console.log(err)
  );
}
