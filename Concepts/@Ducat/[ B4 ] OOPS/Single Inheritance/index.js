class Parent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sum = x + y;
  }
}

class Child extends Parent {
  calculate() {
    console.log(`${this.x} + ${this.y} = ${this.sum}`);
  }
}

const object = new Child(10, 20);

object.calculate();
