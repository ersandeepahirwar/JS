const secrets = new WeakMap();

const ONE714510036 = { ID: 1714510036, name: "Sandeep Ahirwar" };
secrets.set(ONE714510036, "India@2025");

console.log(
  `The password of ${ONE714510036.name} is ${secrets.get(ONE714510036)}`
);
