const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
};

Array.from(document.querySelectorAll(".container")).forEach((element) => {
  setTimeout(() => {
    element.textContent = getRandomColor();
    element.style.fontSize = "1.6rem";
  }, 1000);

  setTimeout(() => {
    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor();
  }, 2000);

  setTimeout(() => {
    element.style.border = `0.2rem solid ${getRandomColor()}`;
    element.style.borderRadius = "2rem";
  }, 3000);
});
