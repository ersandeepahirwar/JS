const object = {
  A: 100,
  B: 5,
  addition() {
    console.log(
      `In Regular Function, ${object.A} + ${object.B} = ${object.A + object.B}`,
    );
  },
  subtraction() {
    console.log(
      `In Regular Function, ${this.A} - ${this.B} = ${this.A - this.B}`,
    );
  },
  multiplication: function () {
    console.log(
      `In Anonymous Function, ${object.A} * ${object.B} = ${object.A * object.B}`,
    );
  },
  division: function () {
    console.log(
      `In Anonymous Function, ${this.A} / ${this.B} = ${this.A / this.B}`,
    );
  },
  modulus: () =>
    console.log(
      `In Fat Arrow Function, ${object.A} % ${object.B} = ${object.A % object.B}`,
    ),
  square: () =>
    // Using this Keyword, We can't access the values of A and B
    console.log(
      `In Fat Arrow Function, ${this.A} ** ${this.B} = ${this.A ** this.B}`,
    ),
};

object.addition();
object.subtraction();
object.multiplication();
object.division();
object.modulus();
object.square();
