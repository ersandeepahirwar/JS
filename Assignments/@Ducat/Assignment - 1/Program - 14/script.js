// Write a JavaScript program to print and count all 3-digit Armstrong Numbers within a given range.

let checkArmstrong = (number) => {
  let tempNumber = number;
  let sumOfDigitsCubes = 0;
  while (tempNumber !== 0) {
    let digit = tempNumber % 10;
    sumOfDigitsCubes += digit ** 3;
    tempNumber = parseInt(tempNumber / 10);
  }
  return number > 1 && sumOfDigitsCubes === number;
};

let findArmstrongNumbers = (startingRange, endingRange) => {
  let armstrongNumbers = "";
  let count = 0;
  for (let number = startingRange; number <= endingRange; number++) {
    if (checkArmstrong(number)) {
      armstrongNumbers += ` ${number}`;
      count++;
    }
  }
  return [armstrongNumbers, count];
};

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let [armstrongNumbers, count] = findArmstrongNumbers(
  startingRange,
  endingRange,
);

if (count > 0) {
  alert(
    `${count} 3-Digit Armstrong Number${count > 1 ? "s" : ""} found between ${startingRange} and ${endingRange} and ${count > 1 ? "They are" : "It is"}${armstrongNumbers}`,
  );
} else {
  alert(
    `No Armstrong Number found between ${startingRange} and ${endingRange}`,
  );
}
