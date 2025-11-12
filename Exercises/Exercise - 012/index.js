/*

Create a faulty calculator in JavaScript that takes two numbers and an operator as input from the user.

The calculator should perform the correct operation 90% of the time,
but 10% of the time it performs a wrong operation according to the following rules:
When the user enters + perform -
When the user enters - perform /
When the user enters * perform +
When the user enters / perform **

*/

const faultyOperators = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**",
};

const faultyCalculator = (firstNumber, secondNumber, operator) => {
  alert(
    `${firstNumber} ${operator} ${secondNumber} = ${
      Math.random() > 0.1
        ? eval(`${firstNumber}${operator}${secondNumber}`)
        : eval(`${firstNumber}${faultyOperators[operator]}${secondNumber}`)
    }`
  );
};

const firstNumber = prompt("What is your first number?");
const secondNumber = prompt("What is your second number?");
const operator = prompt("Which operation do you want to perform?");

faultyCalculator(firstNumber, secondNumber, operator);
