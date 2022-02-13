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

let todaysDate = "current-date";
todaysDate.innerHTML = `Today is ${day}, ${month} ${now.getDate()}, ${now.getFullYear()}`;

console.log(todaysDate);

// Challenge 7

function formatDate() {
  return `${day}, ${month} ${now.getDate()}, ${now.getFullYear()} `;
}

console.log(formatDate(new Date()));
