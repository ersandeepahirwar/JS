class Test {
  #show() {
    console.log("In show() of Test class");
  }
  display() {
    this.#show();
    console.log("In display() of Test class");
  }
}

const object = new Test();
// object.show();
object.display();
