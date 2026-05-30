// Write a JavaScript program to check whether a number is a prime number or not.

let isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

let number = parseInt(prompt("What number do you want to check for prime?"));

alert(
  isPrime(number)
    ? `${number} is a Prime Number`
    : `${number} is not a Prime Number`,
);
