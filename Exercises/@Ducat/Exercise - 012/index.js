// Write a JavaScript program to check whether a number is a perfect square or not.

const number = 1;

console.log(
  Math.sqrt(number) % 1 === 0
    ? `${number} is a perfect square`
    : `${number} is not a perfect square`,
);
