// Write a JavaScript program to print and count all Armstrong Numbers within a given range.

let startingRange = parseInt(prompt("What is your staring range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let armstrongNumbersCount = 0;
let armstrongNumbers = "";

for (let number = startingRange; number <= endingRange; number++) {
  let sumOfDigitsCubes = 0;
  for (
    let tempNumber = number;
    tempNumber != 0;
    tempNumber = parseInt(tempNumber / 10)
  ) {
    let digit = tempNumber % 10;
    sumOfDigitsCubes += Math.pow(digit, 3);
  }

  if (sumOfDigitsCubes === number) {
    armstrongNumbersCount++;
    armstrongNumbers += ` ${number}`;
  }
}

if (armstrongNumbersCount > 0) {
  alert(
    `${armstrongNumbersCount} Armstrong Number${armstrongNumbersCount > 1 ? "s" : ""} found between ${startingRange} and ${endingRange} and ${armstrongNumbersCount > 1 ? "They are" : "It is"}${armstrongNumbers}`,
  );
} else {
  alert(
    `No Armstrong Number found between ${startingRange} and ${endingRange}`,
  );
}
