// Write a JavaScript program to count the occurrences of every element in an array.

const countOccurrences = (array) => {
  const object = {};
  for (let i = 0; i < array.length; i++) {
    let occurrences = 0;
    if (array[i] in object) {
      continue;
    }
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        occurrences++;
      }
    }
    object[array[i]] = occurrences;
  }
  return object;
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

let output = `Original Array : [ ${array.join(", ")} ]\n`;
for (const [element, occurrences] of Object.entries(countOccurrences(array))) {
  output += `Element ${element} occurs ${occurrences} ${occurrences === 1 ? "time" : "times"}.\n`;
}
alert(output);
