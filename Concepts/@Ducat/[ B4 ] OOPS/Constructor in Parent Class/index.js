class Parent {
  constructor() {
    console.log("Constructing Parent Class");
  }
  show() {
    console.log("In show() of Parent Class");
  }
}

class Child extends Parent {
  display() {
    console.log("In display() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
