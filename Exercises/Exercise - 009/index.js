// Write a JavaScript program to print the marks of students stored in an object using a for...in loop.

const students = {
  "Sandeep Ahirwar": {
    ID: 1714510036,
    age: 25,
    marks: 93,
  },
  "Rohit Kushwaha": {
    ID: 1714510035,
    age: 26,
    marks: 77,
  },
  "Vedansh Pathak": {
    ID: 1714510048,
    age: 27,
    marks: 82,
  },
};

for (const student in students) {
  console.log(`Marks of ${student} are ${students[student].marks}`);
}
