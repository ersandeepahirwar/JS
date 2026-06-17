const string = "INDIA";

console.log(
  string.padStart(6, " ").padStart(11, "-").padEnd(12, " ").padEnd(17, "-"),
);

for (let iteration = 0; iteration < 10; iteration++) {
  console.log(
    Number(Math.random().toString().substr(2, 6)).toString().padEnd(6, "1"),
  );
}
