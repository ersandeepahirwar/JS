// Write a JavaScript program to find the reverse of a number.

let reverse = (number) => {
  let reversedNumber = 0;
  while (number !== 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = parseInt(number / 10);
  }

  return reversedNumber;
};

let number = parseInt(prompt("What number do you want to reverse?"));

alert(`Reverse of ${number} is ${reverse(number)}`);
