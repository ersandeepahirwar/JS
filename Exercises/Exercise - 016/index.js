// Write a JavaScript program to filter all numbers divisible by 10 from a given array using the filter() method.

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(numbers.filter((number) => number % 10 === 0));
