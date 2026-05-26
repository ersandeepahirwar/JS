// Write a JavaScript program to check whether a number is divisible by 2 and 3, by 2 or by 3, or by neither 2 nor 3.

const number = parseInt(prompt("What number do you want to check?"));

if (number % 2 === 0) {
  if (number % 3 === 0) {
    alert(`${number} is divisible by both 2 and 3`);
  } else {
    alert(`${number} is divisible by 2 but not 3`);
  }
} else {
  if (number % 3 === 0) {
    alert(`${number} is divisible by 3 but not 2`);
  } else {
    alert(`${number} is divisible by neither 2 nor 3`);
  }
}
