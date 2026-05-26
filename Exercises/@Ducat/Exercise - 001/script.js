/* 

Write a JavaScript program to calculate the Simple Interest,
Total Amount, and 12-Month EMI

*/

const P = parseFloat(prompt("What is your loan amount?"));
const R = parseFloat(prompt("What is the annual interest rate (%)?"));
const months = parseInt(prompt("What is your loan tenure in months?"));

const T = months / 12;

const SI = (P * R * T) / 100;
const A = P + SI;

const monthlyRate = R / 12 / 100;

const EMI =
  (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
  (Math.pow(1 + monthlyRate, months) - 1);

alert(`
    Principal : ₹${P}
    Rate : ${R}%
    Tenure : ${months} months
    Simple Interest : ₹${SI.toFixed(0)}
    Amount : ₹${A.toFixed(0)}
    EMI : ₹${EMI.toFixed(0)}
`);
