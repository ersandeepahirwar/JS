// Write a JavaScript program to find the sum of even numbers and odd numbers within a given range.

let sum = (startingRange, endingRange) => {
  let evenNumbersSum = 0;
  let oddNumbersSum = 0;

  for (let number = startingRange; number <= endingRange; number++) {
    if (number % 2 === 0) {
      evenNumbersSum += number;
    } else {
      oddNumbersSum += number;
    }
  }

  alert(
    `Between ${startingRange} and ${endingRange}, sum of even numbers is ${evenNumbersSum} and sum of odd numbers is ${oddNumbersSum}`,
  );
};

let startingRange = parseInt(prompt("What is your Starting Range?"));
let endingRange = parseInt(prompt("What is your Ending Range?"));

sum(startingRange, endingRange);
