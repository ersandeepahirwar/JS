// Write a JavaScript program to print all Perfect Numbers within a given range.

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let perfectNumbersCount = 0;
let perfectNumbers = "";

for (let number = startingRange; number <= endingRange; number++) {
  let sumOfDivisors = 0;
  for (let divisor = 1; divisor <= number / 2; divisor++) {
    if (number % divisor === 0) {
      sumOfDivisors += divisor;
    }
  }

  if (sumOfDivisors === number && number > 0) {
    perfectNumbersCount++;
    perfectNumbers += ` ${number}`;
  }
}

if (perfectNumbersCount > 0) {
  alert(
    `Perfect Number${perfectNumbersCount > 1 ? "s" : ""} between ${startingRange} and ${endingRange} ${perfectNumbersCount > 1 ? "are" : "is"}${perfectNumbers}`,
  );
} else {
  alert(`No Perfect Number found between ${startingRange} and ${endingRange}`);
}
