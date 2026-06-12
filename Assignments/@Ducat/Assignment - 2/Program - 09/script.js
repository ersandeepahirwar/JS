// Write a JavaScript program to find the first, second, and third smallest elements in an array without using the sort() method.

const findSmallestElements = (array) => {
  let smallestElements = [];
  let currentSmallest = -Infinity;
  for (let iteration = 1; iteration <= 3; iteration++) {
    let nextSmallest = Infinity;
    for (let element of array) {
      if (element > currentSmallest && element < nextSmallest) {
        nextSmallest = element;
      }
    }

    if (nextSmallest === Infinity) {
      break;
    }

    smallestElements.push(nextSmallest);
    currentSmallest = nextSmallest;
  }
  return smallestElements;
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
] = findSmallestElements(array);

alert(`
    Original Array : [ ${array.join(", ")} ]
    First Smallest Element : ${first}
    Second Smallest Element : ${second}
    Third Smallest Element : ${third}
    `);
