document.addEventListener("DOMContentLoaded", () => {
  particlesJS.load("particles-js", "particle.json", function () {
    console.log("particles.js config loaded");
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const futureDate = new Date("2024-08-30T10:00:00");

const getTimeRemaining = () => {
  const today = new Date();
  const difference = futureDate.getTime() - today.getTime();

  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  const oneSecond = 1000;

  let days = Math.floor(difference / oneDay);
  let hours = Math.floor((difference % oneDay) / oneHour);
  let minutes = Math.floor((difference % oneHour) / oneMinute);
  let seconds = Math.floor((difference % oneMinute) / oneSecond);

  daysElement.textContent = days;
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
};

getTimeRemaining();
setInterval(getTimeRemaining, 1000);
