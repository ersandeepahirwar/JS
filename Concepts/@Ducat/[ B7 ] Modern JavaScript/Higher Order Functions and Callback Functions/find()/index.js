const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFind = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return array[index];
    }
  }
};

console.log(array.find(equation));
console.log(customFind(array, equation));
