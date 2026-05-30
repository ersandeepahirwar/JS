// Write a JavaScript program to check whether a number is a magical number or not.

let sumOfDigits = (number) => {
  let sum = 0;
  while (number !== 0) {
    let digit = number % 10;
    sum += digit;
    number = parseInt(number / 10);
  }

  return sum;
};

let reverse = (number) => {
  let reversedNumber = 0;
  while (number !== 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = parseInt(number / 10);
  }

  return reversedNumber;
};

let checkMagical = (number) => {
  let digitsSum = sumOfDigits(number);
  return digitsSum * reverse(digitsSum) === number;
};

let number = parseInt(
  prompt("What number do you want to check for magical number?"),
);

alert(
  checkMagical(number)
    ? `${number} is a Magical Number`
    : `${number} is not a Magical Number`,
);
