const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log(
  "Description of ID :",
  Object.getOwnPropertyDescriptor(object, "ID"),
);
console.log(
  "Description of Name :",
  Object.getOwnPropertyDescriptor(object, "name"),
);
console.log(
  "Description of CGPA :",
  Object.getOwnPropertyDescriptor(object, "CGPA"),
);
