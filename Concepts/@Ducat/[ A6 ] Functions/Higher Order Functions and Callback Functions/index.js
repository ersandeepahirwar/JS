function higherOrder(callback) {
  console.log("In Higher Order Function");
  callback();
  console.log("Back to Higher Order Function");
}

function callback() {
  console.log("In Callback Function");
}

console.log("In Main Outer Scope");
higherOrder(callback);
console.log("Back to Main Outer Scope");
