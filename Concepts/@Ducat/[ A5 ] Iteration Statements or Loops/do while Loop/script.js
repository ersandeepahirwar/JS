do {
  var A = parseInt(prompt("What is your first number?"));
  var B = parseInt(prompt("What is your second number?"));

  var operator = prompt(
    "Which operation ( + - * / % ) do you want to perform?",
  );

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
      alert("Something went wrong!");
  }
  var choice = prompt("Press any key to continue or Press n to exit");
} while (choice != "n");
