const grocery = [
  { name: "Asparagus", price: 120 },
  { name: "Banana", price: 30 },
  { name: "Cherry", price: 200 },
  { name: "Dragon Fruit", price: 400 },
];

[vegetable, ...fruits] = grocery;

console.log(vegetable);
console.log(fruits);
