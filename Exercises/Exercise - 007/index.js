// Write a JavaScript program to check whether a given number is divisible by either 2 or 3.

const number = 25;

console.log(
  number % 2 === 0 || number % 3 === 0
    ? `${number} is divisible by 2 or 3`
    : `${number} is not divisible by 2 or 3`
);
