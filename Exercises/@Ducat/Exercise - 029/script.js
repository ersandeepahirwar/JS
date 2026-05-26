// Write a JavaScript program to check whether a number is an Armstrong number or not.

let number = parseInt(
  prompt("What number do you want to check for Armstrong number?"),
);

let temp = number;
let sumOfAllDigitsCubes = 0;

while (number != 0) {
  let digit = number % 10;
  sumOfAllDigitsCubes += Math.pow(digit, 3);
  number = parseInt(number / 10);
}

alert(
  sumOfAllDigitsCubes === temp
    ? `${temp} is an Armstrong Number`
    : `${temp} is not an Armstrong Number`,
);
