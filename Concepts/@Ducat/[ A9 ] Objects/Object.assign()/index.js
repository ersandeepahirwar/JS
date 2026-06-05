const A = {
  x: 1,
  y: 2,
};
const B = A; // Shallow Copy
B.x = 10;
B.y = 20;
console.log("A :", A);
console.log("B :", B);

const C = {
  x: 1,
  y: 2,
};
const D = {};
Object.assign(D, C); // Deep Copy
D.x = 10;
D.y = 20;
console.log("C :", C);
console.log("D :", D);
