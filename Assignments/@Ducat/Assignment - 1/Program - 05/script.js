// Write a JavaScript program to find the sum of even digits and sum of odd digits of a number.

let sumOfDigits = (number) => {
  let sumOfEvenDigits = 0;
  let sumOfOddDigits = 0;
  while (number !== 0) {
    let digit = number % 10;
    if (digit % 2 === 0) {
      sumOfEvenDigits += digit;
    } else {
      sumOfOddDigits += digit;
    }
    number = parseInt(number / 10);
  }

  return [sumOfEvenDigits, sumOfOddDigits];
};

let number = parseInt(
  prompt("What number do you want to find even and odd digit sums for?"),
);
let [evenDigitsSum, oddDigitsSum] = sumOfDigits(number);

alert(
  `For ${number}, Sum of Even Digits is ${evenDigitsSum} and Sum of Odd Digits is ${oddDigitsSum}`,
);
