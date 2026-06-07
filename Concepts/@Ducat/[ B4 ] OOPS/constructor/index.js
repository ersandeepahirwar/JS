class Test {
  constructor() {
    console.log("Constructing Test Class");
  }
  show() {
    console.log("In show() of Test Class");
  }
  display() {
    console.log("In display() of Test Class");
  }
}
const object = new Test();
object.show();
object.display();

class Addition {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.sum = x + y;
  }
  calculate() {
    console.log(`${this.x} + ${this.y} = ${this.sum}`);
  }
}
const addition = new Addition(10, 20);
addition.calculate();
const sum = new Addition();
sum.calculate();
