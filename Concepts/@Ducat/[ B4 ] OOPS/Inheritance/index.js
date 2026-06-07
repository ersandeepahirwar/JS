class Parent {
  show() {
    console.log("In show() of Parent Class");
  }
  // Overridden Method
  print() {
    console.log("In print() of Parent Class");
  }
}

class Child extends Parent {
  display() {
    console.log("In display() of Child Class");
  }
  print() {
    console.log("In print() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
object.print();
