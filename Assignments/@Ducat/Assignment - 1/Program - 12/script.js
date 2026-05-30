// Write a JavaScript program to print all Perfect Numbers within a given range.

let checkPerfectNumber = (number) => {
  let sumOfDivisors = 0;
  for (let divisor = 1; divisor <= number / 2; divisor++) {
    if (number % divisor === 0) {
      sumOfDivisors += divisor;
    }
  }
  return number > 1 && sumOfDivisors === number;
};

let findPerfectNumbers = (startingRange, endingRange) => {
  let perfectNumbers = "";
  let count = 0;
  for (let number = startingRange; number <= endingRange; number++) {
    if (checkPerfectNumber(number)) {
      perfectNumbers += ` ${number}`;
      count++;
    }
  }
  return [perfectNumbers, count];
};

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let [perfectNumbers, count] = findPerfectNumbers(startingRange, endingRange);

if (count > 0) {
  alert(
    `Perfect Number${count > 1 ? "s" : ""} between ${startingRange} and ${endingRange} ${count > 1 ? "are" : "is"}${perfectNumbers}`,
  );
} else {
  alert(`No Perfect Number found between ${startingRange} and ${endingRange}`);
}
