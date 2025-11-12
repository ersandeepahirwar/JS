// Write a JavaScript program to calculate the factorial of a number using the reduce method.

const Factorial = (number) =>
  Array.from(Array(number + 1).keys())
    .slice(1)
    .reverse()
    .reduce((accumulator, value) => accumulator * value);

const number = Number.parseInt(window.prompt("What is your number?"));

window.alert(`Factorial of ${number} is ${Factorial(number)}`);
