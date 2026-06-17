async function* generator(number) {
  setTimeout(() => {
    console.log(1 + number);
  }, 1000);
  yield 1;
  setTimeout(() => {
    console.log(2 + number);
  }, 2000);
  yield 2;
  setTimeout(() => {
    console.log(3 + number);
  }, 3000);
  yield 3;
  setTimeout(() => {
    console.log(4 + number);
  }, 4000);
  yield 4;
  setTimeout(() => {
    console.log(5 + number);
  }, 5000);
  yield 5;
}

async function generate() {
  for await (const element of generator(5)) {
    console.log(element);
  }
}

generate();
