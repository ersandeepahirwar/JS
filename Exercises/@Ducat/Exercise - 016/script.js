// Write a JavaScript program to create a simple calculator.

const A = parseInt(prompt("What is your first number?"));
const B = parseInt(prompt("What is your second number?"));
const operator = prompt("What operator do you want to use? ( + - * / % )");

switch (operator) {
  case "+":
    alert(`${A} ${operator} ${B} = ${A + B}`);
    break;
  case "-":
    alert(`${A} ${operator} ${B} = ${A - B}`);
    break;
  case "*":
    alert(`${A} ${operator} ${B} = ${A * B}`);
    break;
  case "/":
    alert(`${A} ${operator} ${B} = ${A / B}`);
    break;
  case "%":
    alert(`${A} ${operator} ${B} = ${A % B}`);
    break;
  default:
    alert("You entered an Invalid Operator or Values");
}
