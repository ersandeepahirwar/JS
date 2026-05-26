// Write a JavaScript program to count the even digits and odd digits in a number.

let number = parseInt(
  prompt("What number do you want to count even and odd digits for?"),
);

let temp = number;

let countOfEvenDigits = 0;
let countOfOddDigits = 0;

while (number != 0) {
  let digit = number % 10;
  if (digit % 2 === 0) {
    countOfEvenDigits += 1;
  } else {
    countOfOddDigits += 1;
  }
  number = parseInt(number / 10);
}

alert(
  `In ${temp}, Count of Even Digits is ${countOfEvenDigits} and Count of Odd Digits is ${countOfOddDigits}`,
);
