const numbers = [0, 1, -1];

for (const number of numbers) {
  const type =
    Math.sign(number) === 1
      ? "Positive"
      : Math.sign(number) === -1
        ? "Negative"
        : "Zero";
  console.log("Number :", number);
  console.log(`Type of ${number} :`, type);
}
