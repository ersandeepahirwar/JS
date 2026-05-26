// Write a JavaScript program to check whether a number is a magical number or not.

let number = parseInt(
  prompt("What number do you want to check for magical number?"),
);

let tempNumber = number;
let sumOfAllDigits = 0;

while (tempNumber != 0) {
  let digit = tempNumber % 10;
  sumOfAllDigits += digit;
  tempNumber = parseInt(tempNumber / 10);
}

let tempSumOfAllDigits = sumOfAllDigits;
let reverse = 0;

while (tempSumOfAllDigits != 0) {
  let digit = tempSumOfAllDigits % 10;
  reverse = reverse * 10 + digit;
  tempSumOfAllDigits = parseInt(tempSumOfAllDigits / 10);
}

alert(
  sumOfAllDigits * reverse === number
    ? `${number} is a Magical Number`
    : `${number} is not a Magical Number`,
);
