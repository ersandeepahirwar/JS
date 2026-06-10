const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFindIndex = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return index;
    }
  }
  return -1;
};

console.log(array.findIndex(equation));
console.log(customFindIndex(array, equation));
