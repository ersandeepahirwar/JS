const number = 9007199254740991;

console.log(`Is ${number} a Safe Integer? :`, Number.isSafeInteger(number));
console.log(
  `Is ${number + 1} a Safe Integer? :`,
  Number.isSafeInteger(number + 1),
);
