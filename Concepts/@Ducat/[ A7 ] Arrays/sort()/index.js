const vowels = ["A", "I", "U", "E", "O"];

console.log("Vowels Array before Sorting :", vowels);
vowels.sort();
console.log("Vowels Array after Sorting :", vowels);

const numbers = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log("Numbers Array before Sorting in Ascending Order :", numbers);
numbers.sort((x, y) => x - y);
console.log("Numbers Array after Sorting in Ascending Order :", numbers);
numbers.sort((x, y) => y - x);
console.log("Numbers Array after Sorting in Descending Order :", numbers);
