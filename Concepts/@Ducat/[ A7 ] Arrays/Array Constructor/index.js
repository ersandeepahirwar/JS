// Create an Array using Array Constructor by Passing Array Elements as Arguments
const elements = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); // Array Elements
console.log("Elements : ", elements);
console.log("Element at Index 0 : ", elements[0]);
console.log("Element at Index 1 : ", elements[1]);
console.log("Element at Index 10 : ", elements[10]);

// Create an Array using Empty Array Constructor
const values = Array();
values[0] = 0;
values[1] = 1;
values[9] = 9;
console.log("Values : ", values);
console.log("Value at Index 0 : ", values[0]);
console.log("Value at Index 1 : ", values[1]);
console.log("Value at Index 10 : ", values[10]);

// Create an Array using Array Constructor by Passing Array Length as Argument
const items = Array(10); // Array Length
items[0] = 0;
items[1] = 1;
items[9] = 9;
console.log("Items : ", items);
console.log("Item at Index 0 : ", items[0]);
console.log("Item at Index 1 : ", items[1]);
console.log("Item at Index 10 : ", items[10]);
