// Write a JavaScript program to check whether a number is a 3-Digit Armstrong number or not.

let number = parseInt(
  prompt("What number do you want to check for 3-Digit Armstrong number?"),
);

let tempNumber = number;
let sumOfAllDigitsCubes = 0;

while (tempNumber != 0) {
  let digit = tempNumber % 10;
  sumOfAllDigitsCubes += Math.pow(digit, 3);
  tempNumber = parseInt(tempNumber / 10);
}

alert(
  number > 1 && sumOfAllDigitsCubes === number
    ? `${number} is a 3-Digit Armstrong Number`
    : `${number} is not a 3-Digit Armstrong Number`,
);
