// Write a JavaScript program to check whether a number is a perfect number or not.

let number = parseInt(
  prompt("What number do you want to check for perfect number?"),
);

let sumOfAllDivisors = 0;

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    sumOfAllDivisors += i;
  }
}

alert(
  number > 1 && sumOfAllDivisors === number
    ? `${number} is a Perfect Number`
    : `${number} is not a Perfect Number`,
);
