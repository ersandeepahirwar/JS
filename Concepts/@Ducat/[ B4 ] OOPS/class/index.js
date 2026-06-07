class Test {
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
  calculate(x, y) {
    this.x = x;
    this.y = y;
    this.sum = x + y;
  }
  display() {
    console.log(`${this.x} + ${this.y} = ${this.sum}`);
  }
}
const addition = new Addition();
addition.calculate(10, 20);
addition.display();

class IsMagicalNumber {
  data(number) {
    this.number = number;
  }
  check() {
    let tempNumber = this.number;
    let sumOfDigits = 0;
    while (tempNumber !== 0) {
      let digit = tempNumber % 10;
      sumOfDigits += digit;
      tempNumber = parseInt(tempNumber / 10);
    }
    let tempSumOfDigits = sumOfDigits;
    let reverse = 0;
    while (tempSumOfDigits !== 0) {
      let digit = tempSumOfDigits % 10;
      reverse = reverse * 10 + digit;
      tempSumOfDigits = parseInt(tempSumOfDigits / 10);
    }
    if (sumOfDigits * reverse === this.number) {
      console.log(`${this.number} is a Magical Number`);
    } else {
      console.log(`${this.number} is not a Magical Number`);
    }
  }
}
const isMagicalNumber = new IsMagicalNumber();
isMagicalNumber.data(1729);
isMagicalNumber.check();
