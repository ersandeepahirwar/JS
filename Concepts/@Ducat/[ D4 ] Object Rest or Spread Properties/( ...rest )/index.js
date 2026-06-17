const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  college: "SR Group of Institutions Jhansi",
  course: "B.Tech",
  branch: "Computer Science and Engineering",
};

const { ID, name, ...education } = student;

console.log("ID :", ID);
console.log("Name :", name);
console.log("Education :", education);
