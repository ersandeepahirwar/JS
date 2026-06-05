const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object :", object);

Object.defineProperties(object, {
  college: {
    value: "SRGI",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  course: {
    value: "B.Tech",
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

console.log("Object :", object);
