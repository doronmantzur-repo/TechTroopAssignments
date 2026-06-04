let year = 2100;
let isLeapYear;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    isLeapYear = (year % 400 === 0);
  } else {
    isLeapYear = true;
  }
} else {
  isLeapYear = false;
}

console.log(isLeapYear ? "Leap year" : "Not a leap year");
