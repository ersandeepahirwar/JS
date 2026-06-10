const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFilter = (array, callback) => {
  const filteredArray = [];
  for (let element of array) {
    if (callback(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

console.log(array.filter(equation));
console.log(customFilter(array, equation));
