// Write a JavaScript program to find the first, second, and third greatest elements in an array without using the sort() method.

const findGreatestElements = (array) => {
  let greatestElements = [];
  let currentGreatest = Infinity;
  for (let iteration = 1; iteration <= 3; iteration++) {
    let nextGreatest = -Infinity;
    for (let element of array) {
      if (element < currentGreatest && element > nextGreatest) {
        nextGreatest = element;
      }
    }

    if (nextGreatest === -Infinity) {
      break;
    }

    greatestElements.push(nextGreatest);
    currentGreatest = nextGreatest;
  }
  return greatestElements;
};

const getValidLength = () => {
  while (true) {
    const length = parseInt(
      prompt("How many elements would you like to store in the array?"),
    );
    if (length <= 0 || isNaN(length)) {
      alert("Invalid input. Please enter a number greater than 0.");
    } else {
      return length;
    }
  }
};

const array = Array.from(
  { length: getValidLength() },
  () => Math.floor(Math.random() * 11) - 5,
);

const [
  first = "Not Available",
  second = "Not Available",
  third = "Not Available",
] = findGreatestElements(array);

alert(`
    Original Array : [ ${array.join(", ")} ]
    First Greatest Element : ${first}
    Second Greatest Element : ${second}
    Third Greatest Element : ${third}
    `);
