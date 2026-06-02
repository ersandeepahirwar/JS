const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  "Sum of Digits from 0 to 9 is",
  array.reduce(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
  ),
);
