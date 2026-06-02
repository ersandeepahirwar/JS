const array = [4, 5, 6, 7, 8, 9];
console.log("Array before inserting new elements : ", array);

array.unshift(3);
array.unshift(2);
array.unshift(1);
array.unshift(0);

console.log("Array after inserting new elements : ", array);
