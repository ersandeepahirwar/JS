const M1714510036 = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  age: 25,
};

localStorage.setItem("M1714510036", JSON.stringify(M1714510036));

console.log(JSON.parse(localStorage.getItem("M1714510036")));
