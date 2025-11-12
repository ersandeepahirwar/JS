// Write a JavaScript program to check whether a given number is divisible by both 2 and 3.

const number = 12;

console.log(
  number % 2 === 0 && number % 3 === 0
    ? `${number} is divisible by 2 and 3`
    : `${number} is not divisible by 2 and 3`
);
