const addNumbers = (A, B) => {
  return new Promise((resolve, reject) => {
    console.log("Adding numbers...");

    setTimeout(() => {
      if (typeof A !== "number" || typeof B !== "number") {
        reject("Both values must be numbers!");
      } else {
        resolve(A + B);
      }
    }, 1000);
  });
};

addNumbers(10, 5)
  .then((sum) => {
    console.log(`The sum of 10 and 5 is ${sum}`);
  })
  .catch((error) => {
    console.log(error);
  });
