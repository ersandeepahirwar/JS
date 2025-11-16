const sum = ({ A, B }) => {
  return new Promise((resolve, reject) => {
    console.log("Adding numbers...");

    setTimeout(() => {
      if (typeof A !== "number" || typeof B !== "number") {
        reject("Both values must be numbers!");
      } else {
        resolve({ A, B, addition: A + B });
      }
    }, 3000);
  });
};

sum({ A: 10, B: 5 })
  .then(({ A, B, addition }) => {
    console.log(`The sum of ${A} and ${B} is ${addition}`);
  })
  .catch((error) => {
    console.log(error);
  });
