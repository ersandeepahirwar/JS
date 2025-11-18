// Immediately Invoked Function Expression

const createUser = (ID, name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ID: ID,
        name: name,
        age: age,
      });
    }, 2000);
  });
};

(async () => {
  const M1714510035 = await createUser(1714510035, "Rohit Kushwaha", 27);
  console.log(M1714510035);
  const M1714510036 = await createUser(1714510036, "Sandeep Ahirwar", 25);
  console.log(M1714510036);
})();
