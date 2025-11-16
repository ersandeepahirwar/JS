const calculate = ({ A, B }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof A !== "number" || typeof B !== "number") {
        reject("Both values must be numbers!");
      } else {
        resolve({ A, B, addition: A + B });
      }
    }, 3000);
  });
};

const sum = async () => {
  console.log("Adding numbers...");

  const { A, B, addition } = await calculate({ A: 10, B: 5 });
  console.log(`Sum of ${A} and ${B} is ${addition}`);
};

sum();
