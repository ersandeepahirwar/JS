const test = (A, B, C, ...rest) => {
  console.log(`A = ${A}, B = ${B}, C = ${C} and rest = ${rest}`);
};

test(0, 1, 2, 3, 4);
test(0, 1, 2, 3, 4, 5);
test(0, 1, 2, 3, 4, 5, 6);
test(0, 1, 2, 3, 4, 5, 6, 7);
test(0, 1, 2, 3, 4, 5, 6, 7, 8);
