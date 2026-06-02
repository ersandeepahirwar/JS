function test() {
  if (true) {
    A = 10; // Global Scope
    var B = 20; // Function Scope
    let C = 30; // Block Scope
    const D = 40; // Block Scope
    console.log(
      `In if Block of Test Function A = ${A}, B = ${B}, C = ${C} and D = ${D}`,
    );
  }
  console.log(`Outside if Block of Test Function A = ${A} and B = ${B}`);
}
test();

console.log(`In Main Outer Scope A = ${A}`);

function main() {
  console.log(`In Main Function A = ${A}`);
}
main();
