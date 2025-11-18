function User(ID, name, age) {
  this.ID = ID;
  this.name = name;
  this.age = age;
}

User.prototype.getUserID = function () {
  return this.ID;
};
User.prototype.getUserName = function () {
  return this.name;
};
User.prototype.getUserAge = function () {
  return this.age;
};

const M1714510035 = new User(1714510035, "Rohit Kushwaha", 27);
const M1714510036 = new User(1714510036, "Sandeep Ahirwar", 25);

console.log(
  M1714510035.getUserID(),
  M1714510035.getUserName(),
  M1714510035.getUserAge()
);

console.log(
  M1714510036.getUserID(),
  M1714510036.getUserName(),
  M1714510036.getUserAge()
);

M1714510035.getUserID = function () {
  return { ID: this.ID };
};
M1714510035.getUserName = function () {
  return { name: this.name };
};
M1714510035.getUserAge = function () {
  return { age: this.age };
};

console.log(
  M1714510035.getUserID(),
  M1714510035.getUserName(),
  M1714510035.getUserAge()
);

console.log(
  M1714510036.getUserID(),
  M1714510036.getUserName(),
  M1714510036.getUserAge()
);

console.log(M1714510035.__proto__ === User.prototype);
