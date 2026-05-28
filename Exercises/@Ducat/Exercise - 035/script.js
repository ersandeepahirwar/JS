// Write a JavaScript program to print all Magical Numbers within a given range.

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let magicalNumbersCount = 0;
let magicalNumbers = "";

for (let number = startingRange; number <= endingRange; number++) {
  let sumOfDigits = 0;
  for (
    let tempNumber = number;
    tempNumber != 0;
    tempNumber = parseInt(tempNumber / 10)
  ) {
    let digit = tempNumber % 10;
    sumOfDigits += digit;
  }

  let tempSumOfDigits = sumOfDigits;
  let reverseSumOfDigits = 0;
  for (
    let tempSum = tempSumOfDigits;
    tempSum != 0;
    tempSum = parseInt(tempSum / 10)
  ) {
    let tempSumDigit = tempSum % 10;
    reverseSumOfDigits = reverseSumOfDigits * 10 + tempSumDigit;
  }

  if (sumOfDigits * reverseSumOfDigits === number) {
    magicalNumbersCount++;
    magicalNumbers += ` ${number}`;
  }
}

if (magicalNumbersCount > 0) {
  alert(
    `Magical Number${magicalNumbersCount > 1 ? "s" : ""} between ${startingRange} and ${endingRange} ${magicalNumbersCount > 1 ? "are" : "is"}${magicalNumbers}`,
  );
} else {
  alert(`No Magical Number found between ${startingRange} and ${endingRange}`);
}
