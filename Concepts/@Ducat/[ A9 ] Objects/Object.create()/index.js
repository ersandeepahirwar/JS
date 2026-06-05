const A = {
  x: 1,
  y: 2,
};

const B = Object.create(A);

console.log("B :", B);
console.log("Prototype of B :", Object.getPrototypeOf(B));
