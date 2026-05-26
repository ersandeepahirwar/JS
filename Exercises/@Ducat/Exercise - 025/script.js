// Write a JavaScript program to find the reverse of a number.

let number = parseInt(prompt("What number do you want to reverse?"));

let temp = number;
let reverse = 0;

while (number != 0) {
  let digit = number % 10;
  reverse = reverse * 10 + digit;
  number = parseInt(number / 10);
}

alert(`Reverse of ${temp} is ${reverse}`);
