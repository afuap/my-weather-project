let current = new Date();
let week = document.querySelector(".day");
let time = document.querySelector(".time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedesay",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[current.getDay()];
let hour = current.getHours();
let minutes = current.getMinutes();
week.innerHTML = `${day}`;
time.innerHTML = `${hour}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${input.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
