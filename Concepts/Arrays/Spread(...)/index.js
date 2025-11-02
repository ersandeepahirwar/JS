const vegetables = [
  { name: "Asparagus", price: 120 },
  { name: "Brinjal", price: 40 },
];

const fruits = [
  { name: "Cherry", price: 200 },
  { name: "Dragon Fruit", price: 400 },
];

const grocery = [...vegetables, ...fruits];
console.log(grocery);
