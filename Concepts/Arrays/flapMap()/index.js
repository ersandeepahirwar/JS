const numbers = [10, 20, 30, 40, 50];

console.log(
  numbers.flatMap((element, index, array) => [element, element * element])
);
