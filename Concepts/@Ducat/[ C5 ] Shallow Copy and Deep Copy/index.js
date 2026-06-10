const A = [0, 1, 2, 3, 4, 5];
const B = A; // Shallow Copy

console.log("A =", A);
console.log("B =", B);
B[6] = 6;
console.log("A =", A);
console.log("B =", B);

const C = [0, 1, 2, 3, 4, 5];
const D = [...C]; // Deep Copy

console.log("C =", C);
console.log("D =", D);
D[6] = 6;
console.log("C =", C);
console.log("D =", D);
