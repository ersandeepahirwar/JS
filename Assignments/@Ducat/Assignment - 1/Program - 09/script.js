// Write a JavaScript program to check whether a number is an Armstrong number or not.

let checkArmstrong = (number) => {
  let sumOfDigitsCubes = 0;
  let tempNumber = number;
  while (tempNumber !== 0) {
    let digit = tempNumber % 10;
    sumOfDigitsCubes += digit ** 3;
    tempNumber = parseInt(tempNumber / 10);
  }

  return sumOfDigitsCubes === number;
};

let number = parseInt(
  prompt("What number do you want to check for Armstrong number?"),
);

alert(
  checkArmstrong(number)
    ? `${number} is an Armstrong Number`
    : `${number} is not an Armstrong Number`,
);
