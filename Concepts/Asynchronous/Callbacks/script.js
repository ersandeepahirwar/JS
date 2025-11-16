const sum = (A, B, callback) => {
  console.log("Adding numbers...");

  setTimeout(() => {
    const addition = A + B;
    callback(A, B, addition);
  }, 3000);
};

const result = (A, B, addition) => {
  console.log(`Sum of ${A} and ${B} is ${addition}`);
};

sum(10, 5, result);
