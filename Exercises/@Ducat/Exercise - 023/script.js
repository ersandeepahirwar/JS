// Write a JavaScript program to print the Fibonacci series up to a number.

let number = parseInt(
  prompt("What number do you want Fibonacci series up to?"),
);

let f1 = 0;
let f2 = 1;
let f = f1 + f2;

let series = `Fibonacci Series upto ${number} is ${f1} ${f2}`;

while (f <= number) {
  series += ` ${f}`;
  f1 = f2;
  f2 = f;
  f = f1 + f2;
}

alert(series);
