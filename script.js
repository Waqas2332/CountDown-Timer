// Referencing HTML Elemenets
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const newDays = document.getElementById("user-days");
const newMonth = document.getElementById("user-month");
const newYear = document.getElementById("user-year");
const form = document.querySelector("form");
const main = document.querySelector("main");

// Declaring Variables
let numDays = 0;
let numMonths = 0;
let numYears = 0;
let newDate;

// Getting Input Field Values
newDays.addEventListener("change", (event) => {
  numDays = event.target.value;
});

newMonth.addEventListener("change", (event) => {
  numMonths = event.target.value;
});

newYear.addEventListener("change", (event) => {
  numYears = event.target.value;
});

// Submiitting Form
// Assembling Date and showing result
form.addEventListener("submit", (event) => {
  event.preventDefault();
  newDate = `${numDays} ${numMonths} ${numYears}`;
  console.log(newDate);
  setTimeout(() => {
    main.style.visibility = "visible";
  }, 100);
});

// Calculation Remmaining Time
function countDown() {
  const getNewDate = new Date(newDate);
  const currDate = new Date();
  const totalSeconds = (getNewDate - currDate) / 1000;
  const remainingDays = Math.floor(totalSeconds / 3600 / 24);
  const remainingHours = Math.floor(totalSeconds / 3600) % 24;
  const remainingMinutes = Math.floor(totalSeconds / 60) % 60;
  const remainingSeconds = totalSeconds % 60;

  days.textContent = remainingDays;
  hours.textContent = remainingHours;
  minutes.textContent = remainingMinutes;
  seconds.textContent = Math.floor(remainingSeconds);
}

countDown();
setInterval(countDown, 1000);
