// Write a JavaScript program to check whether a year is a leap year or not.

const year = parseInt(
  prompt("Which year would you like to check for leap year?"),
);

alert(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a Leap year`
    : `${year} is not a Leap year`,
);
