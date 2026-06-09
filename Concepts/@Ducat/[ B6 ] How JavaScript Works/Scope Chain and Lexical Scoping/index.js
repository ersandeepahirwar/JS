const A = 10;
function outer() {
  const B = 20;
  function inner() {
    const C = 30;
    console.log(`In inner(), A = ${A}, B = ${B} and C = ${C}`);
  }
  inner();
  console.log(`In outer(), A = ${A} and B = ${B}`);
}
outer();
console.log(`A = ${A}`);
