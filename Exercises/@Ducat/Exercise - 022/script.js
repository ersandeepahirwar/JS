// Write a JavaScript program to check whether a number is a prime number or not.

let number = parseInt(prompt("What number do you want to check for prime?"));
let isPrime = true;

for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

alert(
  isPrime === true && number >= 2
    ? `${number} is a Prime Number`
    : `${number} is not a Prime Number`,
);
