const Student = function (ID, name, CGPA) {
  this.ID = ID;
  this.name = name;
  this.CGPA = CGPA;
};

Student.prototype.college = "SRGI";
Student.prototype.display = function () {
  console.log(`
    ID      : ${this.ID}
    Name    : ${this.name}
    CGPA    : ${this.CGPA}
    College : ${this.college}
    `);
};

const SRGI1714510035 = new Student(1714510035, "Rohit Kushwaha", 6.7);
SRGI1714510035.display();

const SRGI1714510036 = new Student(1714510036, "Sandeep Ahirwar", 6.9);
SRGI1714510036.display();
