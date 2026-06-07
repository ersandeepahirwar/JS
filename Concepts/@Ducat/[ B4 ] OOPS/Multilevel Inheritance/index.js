class GrandParent {
  constructor() {
    this.array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}

class Parent extends GrandParent {
  display() {
    return this.array;
  }
}

class Child extends Parent {
  reverse() {
    return this.array.reverse();
  }
}

const child = new Child();

console.log("Original Array :", child.display());
console.log("Reversed Array :", child.reverse());
