const fruits = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 200 },
  { name: "Coconut", price: 300 },
  { name: "Date", price: 400 },
];

const segment = ({ price }) => (price > 200 ? "Expensive" : "Affordable");

const grocery = Map.groupBy(fruits, segment);

console.log(grocery);
