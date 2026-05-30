// Write a JavaScript program to print and count all Palindrome Numbers within a given range.

let checkPalindrome = (number) => {
  let tempNumber = number;
  let reversedNumber = 0;
  while (tempNumber !== 0) {
    let digit = tempNumber % 10;
    reversedNumber = reversedNumber * 10 + digit;
    tempNumber = parseInt(tempNumber / 10);
  }
  return reversedNumber === number;
};

let findPalindromeNumbers = (startingRange, endingRange) => {
  let palindromeNumbers = "";
  let count = 0;
  for (let number = startingRange; number <= endingRange; number++) {
    if (checkPalindrome(number)) {
      palindromeNumbers += ` ${number}`;
      count++;
    }
  }
  return [palindromeNumbers, count];
};

let startingRange = parseInt(prompt("What is your starting range?"));
let endingRange = parseInt(prompt("What is your ending range?"));

let [palindromeNumbers, count] = findPalindromeNumbers(
  startingRange,
  endingRange,
);

if (count > 0) {
  alert(
    `${count} Palindrome Number${count > 1 ? "s" : ""} found between ${startingRange} and ${endingRange} and ${count > 1 ? "They are" : "It is"}${palindromeNumbers}`,
  );
} else {
  alert(
    `No Palindrome Number found between ${startingRange} and ${endingRange}`,
  );
}
