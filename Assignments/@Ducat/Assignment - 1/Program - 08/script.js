// Write a JavaScript program to check whether a number is a NEON number or not.

let checkNeon = (number) => {
  let square = number ** 2;
  let sumOfDigits = 0;
  while (square !== 0) {
    let digit = square % 10;
    sumOfDigits += digit;
    square = parseInt(square / 10);
  }

  return sumOfDigits === number;
};

let number = parseInt(
  prompt("What number do you want to check for Neon number?"),
);

alert(
  checkNeon(number)
    ? `${number} is a Neon Number`
    : `${number} is not a Neon Number`,
);
