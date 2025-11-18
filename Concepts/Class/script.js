class User {
  constructor(ID, name, age) {
    this.ID = ID;
    this.name = name;
    this.age = age;
  }

  getUserID() {
    return this.ID;
  }

  getUserName() {
    return this.name;
  }

  getUserAge() {
    return this.age;
  }
}

class Admin extends User {
  constructor(ID, name, age, role) {
    super(ID, name, age);
    this.role = role;
  }

  getUserRole() {
    return this.role;
  }
}

const M1714510036 = new User(1714510036, "Sandeep Ahirwar", 25);

console.log(
  M1714510036.getUserID(),
  M1714510036.getUserName(),
  M1714510036.getUserAge()
);

const M1714510035 = new Admin(1714510035, "Rohit Kushwaha", 27, "Admin");

console.log(
  M1714510035.getUserID(),
  M1714510035.getUserName(),
  M1714510035.getUserAge(),
  M1714510035.getUserRole()
);
