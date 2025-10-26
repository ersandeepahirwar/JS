// Write a JavaScript program that keeps printing "Try again" until the user enters the correct number.

let number = 16;
let userInput;

while (userInput !== number) {
  userInput = parseInt(prompt("What is your number?"));
  if (userInput !== number) {
    alert("Try again!");
  }
}

alert("Congratulations! You entered the correct number.");
