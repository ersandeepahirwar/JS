class Math {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Addition extends Math {
  calculate() {
    console.log(`${this.x} + ${this.y} = ${this.x + this.y}`);
  }
}

class Subtraction extends Math {
  calculate() {
    console.log(`${this.x} - ${this.y} = ${this.x - this.y}`);
  }
}

const addition = new Addition(10, 20);
addition.calculate();

const subtraction = new Subtraction(20, 10);
subtraction.calculate();
