const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

Object.freeze(object);

console.log("Object :", object);
object.college = "SRGI";
delete object.name;
object.ID = "17CSECS005";
console.log("Object :", object);
