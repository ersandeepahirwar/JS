const numbers = [, "T", "P", "I", "R", "C", "S", "A", "V", "A"];

console.log(
  numbers.reduceRight((accumulator, currentValue, index, array) => {
    return `${accumulator} ${currentValue}`;
  }, "J")
);
