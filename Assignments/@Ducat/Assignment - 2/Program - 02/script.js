// Write a JavaScript program to calculate the sum of even and odd elements in an array separately.

const calculateSum = (array) =>
  array.reduce(
    (sumObject, element) => {
      if (element % 2 === 0) {
        sumObject.sumOfEvenElements += element;
      } else {
        sumObject.sumOfOddElements += element;
      }
      return sumObject;
    },
    { sumOfEvenElements: 0, sumOfOddElements: 0 },
  );

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

const { sumOfEvenElements, sumOfOddElements } = calculateSum(array);
alert(`
    Original Array : [ ${array.join(", ")} ]
    Sum of Even Elements is ${sumOfEvenElements} and Sum of Odd Elements is ${sumOfOddElements}
    `);
