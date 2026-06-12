// Write a JavaScript program to find the smallest element in an array without using the sort() method.

const findSmallest = (array) => {
  let smallest = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] < smallest) {
      smallest = array[index];
    }
  }
  return smallest;
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
    Smallest Element in Array is ${findSmallest(array)}
    `);
