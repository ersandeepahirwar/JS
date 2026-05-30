// Write a JavaScript program to check whether a number is a perfect number or not.

let perfectNumber = (number) => {
  let sumOfDivisors = 0;
  for (let divisor = 1; divisor <= number / 2; divisor++) {
    if (number % divisor === 0) {
      sumOfDivisors += divisor;
    }
  }

  return sumOfDivisors === number && number > 0;
};

let number = parseInt(
  prompt("What number do you want to check for perfect number?"),
);

alert(
  perfectNumber(number)
    ? `${number} is a Perfect Number`
    : `${number} is not a Perfect Number`,
);
