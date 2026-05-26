// Write a JavaScript program to check whether a number is a palindrome or not.

let number = parseInt(
  prompt("What number do you want to check for palindrome?"),
);

let temp = number;
let reverse = 0;

while (number != 0) {
  let digit = number % 10;
  reverse = reverse * 10 + digit;
  number = parseInt(number / 10);
}

alert(
  reverse === temp ? `${temp} is a Palindrome` : `${temp} is not a Palindrome`,
);
