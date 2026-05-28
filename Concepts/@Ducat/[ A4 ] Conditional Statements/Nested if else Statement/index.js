const number = 11;

if (number % 2 === 0) {
  if (number % 3 === 0) {
    console.log(`${number} is divisible by both 2 and 3`);
  } else {
    console.log(`${number} is divisible by 2 but not 3`);
  }
} else {
  if (number % 3 === 0) {
    console.log(`${number} is divisible by 3 but not 2`);
  } else {
    console.log(`${number} is divisible by neither 2 nor 3`);
  }
}
