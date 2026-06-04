const string = "JS";

for (let index in string) {
  console.log(`${string[index]} = ${string.charCodeAt(index)}`);
}
