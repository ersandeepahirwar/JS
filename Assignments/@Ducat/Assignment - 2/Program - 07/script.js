// Write a JavaScript program to find the nth smallest element in an array without using the sort() method.

const findNthSmallest = (array, nthElement) => {
  let currentSmallest = -Infinity;
  for (let iteration = 1; iteration <= nthElement; iteration++) {
    let nextSmallest = Infinity;
    for (let element of array) {
      if (element > currentSmallest && element < nextSmallest) {
        nextSmallest = element;
      }
    }
    currentSmallest = nextSmallest;
  }
  return currentSmallest;
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

const getNthElement = () => {
  while (true) {
    const nthElement = parseInt(
      prompt("Which nth smallest element do you want to find?"),
    );
    if (nthElement <= 0 || isNaN(nthElement)) {
      alert("Invalid Input. Please enter a number greater than 0.");
    } else {
      return nthElement;
    }
  }
};

const nthElement = getNthElement();

alert(`
    Original Array : [ ${array.join(", ")} ]
    ${nthElement}th Smallest Element in Array is ${findNthSmallest(array, nthElement)}
    `);
