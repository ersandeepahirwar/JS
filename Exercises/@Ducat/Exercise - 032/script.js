// Write a JavaScript program to print and count all prime numbers in a range.

let startingRange = parseInt(prompt("What is your staring range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let primeNumbers = `Prime Numbers between ${startingRange} and ${endingRange} are`;
let primeNumbersCount = 0;

for (let number = startingRange; number <= endingRange; number++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (number >= 2 && isPrime === true) {
    primeNumbers += ` ${number}`;
    primeNumbersCount++;
  }
}

alert(primeNumbers);

alert(
  `Count of Prime Numbers between ${startingRange} and ${endingRange} is ${primeNumbersCount}`,
);
