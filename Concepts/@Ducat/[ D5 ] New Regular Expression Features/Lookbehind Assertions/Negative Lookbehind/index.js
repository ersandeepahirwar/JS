const text = "$100 500";

console.log(text.match(/(?<!\$)\d+/)[0]);
