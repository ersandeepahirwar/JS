/*

Write a JavaScript program that dynamically assigns a random text color
and a random background color to each of five boxes on a webpage
using DOM manipulation concepts.

*/

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
};

Array.from(document.querySelectorAll(".container")).forEach((element) => {
  element.textContent = getRandomColor();
  element.style.fontSize = "1.6rem";

  element.style.color = getRandomColor();
  element.style.backgroundColor = getRandomColor();

  element.style.border = `0.2rem solid ${getRandomColor()}`;
  element.style.borderRadius = "2rem";
});
