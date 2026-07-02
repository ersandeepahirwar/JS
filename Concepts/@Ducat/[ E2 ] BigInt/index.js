let number = 50n;

let factorial = 1n;
while (number > 0n) {
  factorial *= number;
  number--;
}

console.log(factorial);
