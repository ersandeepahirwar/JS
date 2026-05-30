// Write a JavaScript program to print and count all prime numbers in a range.

let checkPrime = (number) => {
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

let findPrimeNumbers = (startingRange, endingRange) => {
  let primeNumbers = "";
  let count = 0;
  for (let number = startingRange; number <= endingRange; number++) {
    if (checkPrime(number)) {
      primeNumbers += ` ${number}`;
      count++;
    }
  }
  return [primeNumbers, count];
};

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let [primeNumbers, count] = findPrimeNumbers(startingRange, endingRange);

if (count > 0) {
  alert(
    `${count} Prime Number${count > 1 ? "s" : ""} found between ${startingRange} and ${endingRange} and ${count > 1 ? "They are" : "It is"}${primeNumbers}`,
  );
} else {
  alert(`No Prime Number found between ${startingRange} and ${endingRange}`);
}
