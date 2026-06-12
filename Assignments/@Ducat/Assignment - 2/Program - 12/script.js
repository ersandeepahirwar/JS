// Write a JavaScript program to count the occurrences of a particular element in an array.

const findOccurrences = (array, element) => {
  let occurrences = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      occurrences++;
    }
  }
  return occurrences;
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
      prompt("Which element do you want to count in the array?"),
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
const occurrences = findOccurrences(array, element);

alert(`
    Original Array : [ ${array.join(", ")} ]
    ${element} occurs ${occurrences} ${occurrences === 1 ? "time" : "times"}.
    `);
