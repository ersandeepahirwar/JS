const array = [
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
];

console.log("Original Array :", array);
console.log(
  "Array after using Object.fromEntries() :",
  Object.fromEntries(array),
);
