function* generator() {
  for (let number = 0; number < 10; number += 2) {
    console.log(number);
    yield number + 1;
  }
}

for (let element of generator()) {
  console.log(element);
}
