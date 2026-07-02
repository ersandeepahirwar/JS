class Student {
  constructor(ID, name, CGPA) {
    this.ID = ID;
    this.name = name;
    this.CGPA = CGPA;
  }
  set #setCollege(college) {
    this.college = college;
  }
  get #display() {
    console.log(`
        ID      : ${this.ID}
        Name    : ${this.name}
        CGPA    : ${this.CGPA}
        College : ${this.college}
        `);
  }
  enrollment(college) {
    this.#setCollege = college;
    this.#display;
  }
}

const sandeep = new Student(1714510036, "Sandeep Ahirwar", 6.9);
sandeep.enrollment("SRGI");
