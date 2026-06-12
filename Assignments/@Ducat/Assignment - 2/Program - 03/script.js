// Write a JavaScript program to count the number of even and odd elements in an array.

const countElements = (array) =>
  array.reduce(
    (object, element) => {
      if (element % 2 === 0) {
        object.countOfEvens++;
      } else {
        object.countOfOdds++;
      }
      return object;
    },
    { countOfEvens: 0, countOfOdds: 0 },
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

const { countOfEvens, countOfOdds } = countElements(array);

alert(`
    Original Array : [ ${array.join(", ")} ]
    Count of Even Elements is ${countOfEvens} and Count of Odd Elements is ${countOfOdds}
    `);
