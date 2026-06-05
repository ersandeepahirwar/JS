const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object :", object);

Object.defineProperty(object, "college", {
  value: "SRGI",
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log("Object :", object);
object.college = "AKTU";
console.log("Object :", object);

Object.defineProperty(object, "email", {
  value: "codeysandeep@gmail.com",
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log("Object :", object);

Object.defineProperty(object, "course", {
  value: "B.Tech",
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log("Object :", object);
delete object.course;
console.log("Object :", object);
