// Write a JavaScript program to find the factorial of a given number.

let factorial = (number) => {
  let value = 1;
  while (number > 0) {
    value *= number;
    number--;
  }
  return value;
};

let number = parseInt(prompt("What number do you want the factorial of?"));

alert(`${number}! = ${factorial(number)}`);
