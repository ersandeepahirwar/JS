// Write a JavaScript program to find the greatest ( largest ) element in an array without using the sort() method.

const findGreatest = (array) => {
  let greatest = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] > greatest) {
      greatest = array[index];
    }
  }
  return greatest;
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

alert(`
    Original Array : [ ${array.join(", ")} ]
    Greatest Element in Array is ${findGreatest(array)}
    `);
