/*

// at()

const array = [0, 1, 2, 3, 4, 5];

console.log("Array :", array);
console.log("Element at Index  1 :", array.at(1));
console.log("Element at Index -1 :", array.at(-1));

const string = "APPLE";

console.log("String :", string);
console.log("Element at Index  1 :", string.at(1));
console.log("Element at Index -1 :", string.at(-1));

*/

/*

// Object.hasOwn()

const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
};

console.log("Object :", object);
console.log("Object has ID :", Object.hasOwn(object, "ID"));
console.log("Object has CGPA :", Object.hasOwn(object, "CGPA"));

*/

/*

// Error & cause

try {
  const A = 10;
  const B = 0;
  throw Error("Division is not possible.", {
    cause: "We can not divide a number with 0.",
  });
} catch (error) {
  console.log(error);
}

*/

/*

// Class Field Declarations

class Test {
  A = 20;
  B = 10;
  display() {
    console.log(`${this.A} + ${this.B} = ${this.A + this.B}`);
  }
}

const test = new Test();
test.display();

*/

/*

// Private Methods and Fields

class Test {
  #A = 20;
  #B = 10;
  #display() {
    console.log(`${this.#A} + ${this.#B} = ${this.#A + this.#B}`);
  }
  show() {
    this.#display();
  }
}

const test = new Test();
test.show();

*/
