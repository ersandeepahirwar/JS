// Write a JavaScript program to find the factorial of a given number.

let number = parseInt(prompt("What number do you want the factorial of?"));

let temp = number;

let factorial = 1;
while (number > 0) {
  factorial *= number;
  number--;
}

alert(`${temp}! = ${factorial}`);
