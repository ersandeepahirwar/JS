// Write a JavaScript program to find the sum of even digits and sum of odd digits of a number.

let number = parseInt(
  prompt("What number do you want to find even and odd digit sums for?"),
);

let temp = number;

let sumOfEvenDigits = 0;
let sumOfOddDigits = 0;

while (number != 0) {
  let digit = number % 10;
  if (digit % 2 === 0) {
    sumOfEvenDigits += digit;
  } else {
    sumOfOddDigits += digit;
  }
  number = parseInt(number / 10);
}

alert(
  `For ${temp}, Sum of Even Digits is ${sumOfEvenDigits} and Sum of Odd Digits is ${sumOfOddDigits}`,
);
