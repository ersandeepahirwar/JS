const addNumbers = (A, B, callback) => {
  console.log("Adding numbers...");

  setTimeout(() => {
    const addition = A + B;
    callback(A, B, addition);
  }, 1000);
};

const showResult = (x, y, sum) => {
  console.log(`Sum of ${x} and ${y} is ${sum}`);
};

addNumbers(10, 5, showResult);
