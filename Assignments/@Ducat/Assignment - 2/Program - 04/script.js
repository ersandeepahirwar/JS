// Write a JavaScript program to count the number of prime and non-prime elements in an array.

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const countPrime = (array) =>
  array.reduce(
    (object, element) => {
      if (isPrime(element)) {
        object.primeCount++;
      } else {
        object.nonPrimeCount++;
      }
      return object;
    },
    { primeCount: 0, nonPrimeCount: 0 },
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

const { primeCount, nonPrimeCount } = countPrime(array);
alert(`
    Original Array : [ ${array.join(", ")} ]
    Count of Prime Elements is ${primeCount} and Non-Prime Elements is ${nonPrimeCount}
    `);
