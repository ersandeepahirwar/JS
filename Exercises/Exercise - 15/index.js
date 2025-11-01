// Write a JavaScript program that keeps adding numbers to an array until the user enters 0.

let numbers = [];
let number;

do {
  number = Number.parseInt(
    window.prompt("Give me a number ( 0 ends the sequence )")
  );
  numbers.push(number);
} while (number !== 0);

console.log(numbers);
