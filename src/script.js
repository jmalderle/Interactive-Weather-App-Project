let now = new Date();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "September",
  "October",
  "November",
  "December",
];

let day = days[now.getDay()];
let month = months[now.getMonth()];

let todaysDate = document.querySelector(".current-date");
todaysDate.innerHTML = `It’s ${day},  ${now.getDate()}. ${month} of ${now.getFullYear()}`;

function showTemp(response) {
  console.log();
  let tempForSearchInput = document.querySelector(".current-temperature");
  tempForSearchInput.innerHTML = `${Math.round(response.data.main.temp)}°`;
}

function locateCityWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input"); // search form input
  let newHeading = document.querySelector(".current-city");
  newHeading.innerHTML = `${searchInput.value}`;
  let units = "metric";
  let apiKey = "ceb455b9c7b642371d7b3ed2d734c15b";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  let tempForCity = console.log(apiUrl);

  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", locateCityWeather);

function showCurrentTemp(response) {
  console.log();
  let tempForSearchInput = document.querySelector(".current-temperature");
  tempForSearchInput.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = `${response.data.name}`;
  let weatherType = document.querySelector(".weather-type");
  weatherType.innerHTML = `${response.data.weather.description}`;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "ceb455b9c7b642371d7b3ed2d734c15b";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiURL = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiURL).then(showCurrentTemp);
}

function locate(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", locate);

navigator.geolocation.getCurrentPosition(showPosition);
