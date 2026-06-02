const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before deleting existing elements : ", array);

array.splice(6, 4);
console.log("Array after deleting existing elements : ", array);

array.splice(6, 0, 6, 7, 8, 9);
console.log("Array after inserting new elements : ", array);
