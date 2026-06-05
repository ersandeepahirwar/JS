const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

Object.setPrototypeOf(object, { college: "SRGI" });

console.log("Object :", object);
console.log("Prototype of Object :", Object.getPrototypeOf(object));
