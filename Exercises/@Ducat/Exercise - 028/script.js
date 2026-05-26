// Write a JavaScript program to check whether a number is a NEON number or not.

let number = parseInt(
  prompt("What number do you want to check for Neon number?"),
);

let square = number ** 2;
let sumOfSquareDigits = 0;

while (square != 0) {
  let digit = square % 10;
  sumOfSquareDigits += digit;
  square = parseInt(square / 10);
}

alert(
  sumOfSquareDigits === number
    ? `${number} is a NEON Number`
    : `${number} is not a NEON Number`,
);
