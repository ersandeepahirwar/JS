// Write a JavaScript program to display the day name when the user enters a day number.

const dayNumber = parseInt(
  prompt("What day number would you like to check ( From 0 to 6 ) ?"),
);

switch (dayNumber) {
  case 0:
    alert(`${dayNumber} is Sunday`);
    break;
  case 1:
    alert(`${dayNumber} is Monday`);
    break;
  case 2:
    alert(`${dayNumber} is Tuesday`);
    break;
  case 3:
    alert(`${dayNumber} is Wednesday`);
    break;
  case 4:
    alert(`${dayNumber} is Thursday`);
    break;
  case 5:
    alert(`${dayNumber} is Friday`);
    break;
  case 6:
    alert(`${dayNumber} is Saturday`);
    break;
  default:
    alert("You entered a Invalid Day Number");
}
