const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object Before Deleting Keys :", student);
delete student.ID;
delete student.name;
delete student.CGPA;
console.log("Object After Deleting Keys :", student);

const fruit = {
  name: "Apple",
  quantity: 50,
  price: 120.5,
};

console.log("Object Before Deleting Keys :", fruit);
delete fruit["name"];
delete fruit["quantity"];
delete fruit["price"];
console.log("Object After Deleting Keys :", fruit);
