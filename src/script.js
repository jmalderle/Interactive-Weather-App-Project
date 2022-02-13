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

console.log(todaysDate);
