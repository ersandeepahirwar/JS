// Write a JavaScript program to remove all duplicate ( repeated ) elements from an array.

const removeDuplicates = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
};

const getValidLength = () => {
  while (true) {
    const length = parseInt(
      prompt("How many elements would you like to store in the array?"),
    );
    if (length <= 0 || isNaN(length)) {
      alert("Invalid input. Please enter a number greater than 0.");
    } else if (length === 1) {
      alert(
        "Array must contain at least 2 elements to check or remove duplicates.",
      );
    } else {
      return length;
    }
  }
};

const array = Array.from(
  { length: getValidLength() },
  () => Math.floor(Math.random() * 11) - 5,
);
const updatedArray = removeDuplicates([...array]);

alert(`
    Original Array : [ ${array.join(", ")} ]
    After deleting Duplicate Elements : [ ${updatedArray.join(", ")} ]
    `);
