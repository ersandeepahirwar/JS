// Write a JavaScript program to check whether a number is a palindrome or not.

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

let number = parseInt(
  prompt("What number do you want to check for palindrome?"),
);

alert(
  checkPalindrome(number)
    ? `${number} is a Palindrome Number`
    : `${number} is not a Palindrome Number`,
);
