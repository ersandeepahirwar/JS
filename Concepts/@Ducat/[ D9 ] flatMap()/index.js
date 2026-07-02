const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original Array :", array);
console.log(
  "Array after using map() :",
  array.map((element, index) => [index, element]),
);
console.log(
  "Array after using flatMap() :",
  array.flatMap((element, index) => [index, element]),
);
