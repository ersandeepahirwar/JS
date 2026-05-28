var A = 10;
var B = 20;
var C = 30;
var D = 40;
var E = 50;

if (A >= B && A >= C && A >= D && A >= E) {
  console.log(`${A} is greater then ${B}, ${C}, ${D} and ${E}`);
} else if (B >= C && B >= D && B >= E) {
  console.log(`${B} is greater then ${A}, ${C}, ${D} and ${E}`);
} else if (C >= D && C >= E) {
  console.log(`${C} is greater then ${A}, ${B}, ${D} and ${E}`);
} else if (D >= E) {
  console.log(`${D} is greater then ${A}, ${B}, ${C} and ${E}`);
} else {
  console.log(`${E} is greater then ${A}, ${B}, ${C} and ${D}`);
}
