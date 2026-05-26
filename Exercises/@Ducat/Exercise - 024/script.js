// Write a JavaScript program to find the sum of all digits of a number.

let number = parseInt(
  prompt("What number do you want to find sum of digits for?"),
);

let temp = number;
let sumOfAllDigits = 0;

while (number != 0) {
  let digit = number % 10;
  sumOfAllDigits += digit;
  number = parseInt(number / 10);
}

alert(`Sum of All Digits of ${temp} is ${sumOfAllDigits}`);
