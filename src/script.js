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
