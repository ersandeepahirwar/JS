class Parent {
  show() {
    console.log("In show() of Parent Class");
  }
}

class Child extends Parent {
  constructor() {
    super();
    console.log("Constructing Child Class");
  }
  display() {
    console.log("In display() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
