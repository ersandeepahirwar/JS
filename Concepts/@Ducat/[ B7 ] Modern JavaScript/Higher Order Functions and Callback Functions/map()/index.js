const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customMap = (array, callback) => {
  const mappedArray = [];
  for (let element of array) {
    mappedArray.push(callback(element));
  }
  return mappedArray;
};

console.log(array.map(equation));
console.log(customMap(array, equation));
