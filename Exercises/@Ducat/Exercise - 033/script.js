// Write a JavaScript program to print and count all Palindrome Numbers within a given range.

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let palindromeNumbersCount = 0;
let palindromeNumbers = "";

for (let number = startingRange; number <= endingRange; number++) {
  let reverse = 0;
  for (
    let tempNumber = number;
    tempNumber != 0;
    tempNumber = parseInt(tempNumber / 10)
  ) {
    let digit = tempNumber % 10;
    reverse = reverse * 10 + digit;
  }

  if (reverse === number) {
    palindromeNumbersCount++;
    palindromeNumbers += ` ${number}`;
  }
}

if (palindromeNumbersCount > 0) {
  alert(
    `${palindromeNumbersCount} Palindrome Number${palindromeNumbersCount > 1 ? "s" : ""} found between ${startingRange} and ${endingRange} and ${palindromeNumbersCount > 1 ? "They are" : "It is"}${palindromeNumbers}`,
  );
} else {
  alert(
    `No Palindrome Number found between ${startingRange} and ${endingRange}`,
  );
}
