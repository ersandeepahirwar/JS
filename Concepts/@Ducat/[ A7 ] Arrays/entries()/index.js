const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let element of array.entries()) {
  console.log(element);
}

// Accessing Index and Value separately
for (let [index, value] of array.entries()) {
  console.log("Index = ", index, "Value = ", value);
}
