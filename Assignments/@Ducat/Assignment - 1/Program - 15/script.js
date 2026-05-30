// Write a JavaScript program to print and count all Magical Numbers within a given range.

let sumOfDigits = (number) => {
  let sum = 0;
  while (number !== 0) {
    let digit = number % 10;
    sum += digit;
    number = parseInt(number / 10);
  }
  return sum;
};

let reverse = (number) => {
  let reversedNumber = 0;
  while (number !== 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = parseInt(number / 10);
  }
  return reversedNumber;
};

let checkMagical = (number) => {
  let digitsSum = sumOfDigits(number);
  return digitsSum * reverse(digitsSum) === number;
};

let findMagicalNumbers = (startingRange, endingRange) => {
  let magicalNumbers = "";
  let count = 0;
  for (let number = startingRange; number <= endingRange; number++) {
    if (checkMagical(number)) {
      magicalNumbers += ` ${number}`;
      count++;
    }
  }
  return [magicalNumbers, count];
};

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let [magicalNumbers, count] = findMagicalNumbers(startingRange, endingRange);

if (count > 0) {
  alert(
    `${count} Magical Number${count > 1 ? "s" : ""} found between ${startingRange} and ${endingRange} and ${count > 1 ? "They are" : "It is"}${magicalNumbers}`,
  );
} else {
  alert(`No Magical Number found between ${startingRange} and ${endingRange}`);
}
