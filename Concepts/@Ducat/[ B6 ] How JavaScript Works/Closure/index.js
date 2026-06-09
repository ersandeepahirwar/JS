const A = 10;
function outer() {
  const B = 20;
  function inner() {
    const C = 30;
    console.log(`In inner(), A = ${A}, B = ${B} and C = ${C}`);
  }
  return inner;
}

const object = outer();
object();
