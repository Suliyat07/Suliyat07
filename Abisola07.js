// Days 
const date = new Date();
const currentDate = date.getUTCDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = days[currentDate];
// Display the Day
document.getElementById(
  "day"
).innerHTML = `<b> Day Of The Week:</b> ${currentDay}`;
// Time Js
function seconds() {
  const date = new Date();
  const currentTime = date.getTime();
  document.getElementById(
    "time"
  ).innerHTML = `<b> UTC Time: </b>  ${currentTime}`;
}
// An interval to update the seconds every 1000 seconds
setInterval(seconds, 1000);
