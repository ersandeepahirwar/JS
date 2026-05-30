// Write a JavaScript program to count the even digits and odd digits in a number.

let countDigits = (number) => {
  let countOfEvenDigits = 0;
  let countOfOddDigits = 0;
  while (number !== 0) {
    let digit = number % 10;
    if (digit % 2 === 0) {
      countOfEvenDigits++;
    } else {
      countOfOddDigits++;
    }
    number = parseInt(number / 10);
  }

  return [countOfEvenDigits, countOfOddDigits];
};

let number = parseInt(
  prompt("What number do you want to count even and odd digits for?"),
);

let [evenDigitsCount, oddDigitsCount] = countDigits(number);

alert(
  `For ${number}, Count of Even Digits is ${evenDigitsCount} and Count of Odd Digits is ${oddDigitsCount}`,
);
