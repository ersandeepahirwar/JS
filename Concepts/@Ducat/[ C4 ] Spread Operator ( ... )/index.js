const test = (A, B, C, D) => {
  console.log(`A = ${A}, B = ${B}, C = ${C} and D = ${D}`);
};

const array = [0, 1, 2, 3];
test(...array);
