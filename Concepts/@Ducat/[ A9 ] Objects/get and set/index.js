const employee = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  designation: "Software Engineer",
  city: "Jhansi",

  set setSalary(salary) {
    this.salary = salary;
  },

  get slip() {
    console.log(`
        Employee ID   : ${this.ID}
        Employee Name : ${this.name}
        Designation   : ${this.designation}
        City          : ${this.city}
        Salary        : ${this.salary}
        `);
  },
};

employee.setSalary = 189000;
employee.slip;
