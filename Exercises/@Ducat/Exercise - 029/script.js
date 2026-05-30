// Write a JavaScript program to check whether a number is a 3-Digit Armstrong number or not.

let number = parseInt(
  prompt("What number do you want to check for 3-Digit Armstrong number?"),
);

let temp = number;
let sumOfAllDigitsCubes = 0;

while (number != 0) {
  let digit = number % 10;
  sumOfAllDigitsCubes += Math.pow(digit, 3);
  number = parseInt(number / 10);
}

alert(
  number > 1 && sumOfAllDigitsCubes === temp
    ? `${temp} is a 3-Digit Armstrong Number`
    : `${temp} is not a 3-Digit Armstrong Number`,
);
