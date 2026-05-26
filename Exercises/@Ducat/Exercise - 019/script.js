/* 

Write a JavaScript program to find and display the sum of even numbers and the sum of odd numbers
within a specified range entered by the user.

*/

let startingRange = parseInt(prompt("What is your Starting Range?"));
let endingRange = parseInt(prompt("What is your Ending Range?"));

let oddNumbersSum = 0;
let evenNumbersSum = 0;

for (let i = startingRange; i <= endingRange; i++) {
  if (i % 2 !== 0) {
    oddNumbersSum += i;
  } else {
    evenNumbersSum += i;
  }
}

alert(
  `Sum of Odd Numbers between ${startingRange} and ${endingRange} is ${oddNumbersSum} and Sum of Even Numbers between ${startingRange} and ${endingRange} is ${evenNumbersSum}`,
);
