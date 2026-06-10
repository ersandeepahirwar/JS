const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFindLast = (array, callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (callback(array[index])) {
      return array[index];
    }
  }
};

console.log(array.findLast(equation));
console.log(customFindLast(array, equation));
