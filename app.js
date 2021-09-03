const firstH = document.querySelector(".day");
const text = document.querySelector(".text");

let days = new Date();
let weekday = days.getDay();
let dayName;
let msg;

switch (weekday) {
  case 0:
    nameOfDay = "Sunday";
    msg = "Time to chillax!";
    break;
  case 1:
    dayName = "Monday";
    msg = "Monday morning blues!";
    break;
  case 2:
    dayName = "Tuesday";
    msg = "Taco Time!";
    break;
  case 3:
    dayName = "Wednesday";
    msg = "Two more days to the weekend.";
    break;
  case 4:
    dayName = "Thursday";
    msg = "The weekend is almost here...";
    break;
  case 5:
    dayName = "Friday";
    msg = "Weekend is here!";
    break;
  case 6:
    dayName = "Saturday";
    msg = "Time to party!";
    break;
}

firstH.innerHTML = `${dayName}`;
text.innerHTML = `${msg}`;
