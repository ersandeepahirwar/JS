const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
};

Array.from(document.querySelectorAll(".container")).forEach((element) => {
  setInterval(() => {
    element.textContent = getRandomColor();
    element.style.fontSize = "1.6rem";

    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor();

    element.style.border = `0.2rem solid ${getRandomColor()}`;
    element.style.borderRadius = "2rem";
  }, 100);
});
