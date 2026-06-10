const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFindLastIndex = (array, callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (callback(array[index])) {
      return index;
    }
  }
  return -1;
};

console.log(array.findLastIndex(equation));
console.log(customFindLastIndex(array, equation));
