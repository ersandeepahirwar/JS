const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(
  "Index of Last Array Element divisible by 5 :",
  array.findLastIndex((element) => element % 5 === 0),
);
