// Write a JavaScript program to find the index of the first and last occurrence of a particular element in an array.

const findIndexOfElements = (array, number) => {
  const indexOfElements = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === number) {
      indexOfElements.push(index);
    }
  }
  if (indexOfElements.length === 0) {
    return { first: -1, last: -1 };
  }
  return {
    first: indexOfElements[0],
    last: indexOfElements[indexOfElements.length - 1],
  };
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

const getElement = () => {
  while (true) {
    const element = parseInt(
      prompt(
        "Which element do you want to find the first and last index of in the array?",
      ),
    );
    if (isNaN(element)) {
      alert("Invalid input. Please enter a number.");
    } else {
      return element;
    }
  }
};

const array = Array.from(
  { length: getValidLength() },
  () => Math.floor(Math.random() * 11) - 5,
);

const element = getElement();
const { first, last } = findIndexOfElements(array, element);

alert(`
    Original Array : [ ${array.join(", ")} ]
    First Occurrence Index of ${element} is ${first}
    Last Occurrence Index of ${element} is ${last}
    `);
