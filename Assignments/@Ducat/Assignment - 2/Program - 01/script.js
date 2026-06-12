// Write a JavaScript program to calculate the sum of all elements in an array.

const calculateSum = (array) =>
  array.reduce((sum, element) => sum + element, 0);

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
alert(
  `Sum of All Elements of Array [ ${array.join(", ")} ] is ${calculateSum(array)}`,
);
