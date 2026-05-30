// Write a JavaScript program to check whether a number is a 3-Digit Armstrong number or not.

let checkArmstrong = (number) => {
  let sumOfDigitsCubes = 0;
  let tempNumber = number;
  while (tempNumber !== 0) {
    let digit = tempNumber % 10;
    sumOfDigitsCubes += digit ** 3;
    tempNumber = parseInt(tempNumber / 10);
  }

  return number > 1 && sumOfDigitsCubes === number;
};

let number = parseInt(
  prompt("What number do you want to check for 3-Digit Armstrong number?"),
);

alert(
  checkArmstrong(number)
    ? `${number} is a 3-Digit Armstrong Number`
    : `${number} is not a 3-Digit Armstrong Number`,
);
