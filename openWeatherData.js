/* eslint-disable prettier/prettier */
// import weatherCond from './components/weatherCond';
// const weatherCond = require('./components/weatherCond');
const fetch = require('node-fetch');
const key = '0b8d4666a1fe2cb39aff87ff966f3a34'; //open weathermap key
const cities = [
  'Kinshasa',
  'Minneapolis',
  'Syracuse',
  'London',
  'Paris',
  'Tokyo',
  '',
]; //
const citiesId = [2314302, 4984, 5965, 1417, 6550, 8074]; //ids in same order


// `api.openweathermap.org/data/2.5/weather?id={city id}&appid=${key}`


 const fetchData = city => {
    //could filter if I am just going to use the ones above
    const queryString = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${key}`;
  fetch(queryString)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data.list[1].main.temp.toFixed(0));
      console.log(data.list[0].main.temp,data.list[0].main.feels_like,data.list[0].sys.country, data.list[0].weather[0].main);
      // console.log(data.list[0].main.temp,  );
    })
    .catch(err=> console.log(err));
};
fetchData('Minneapolis');
// console.log(weatherCond['Rain'].title);
