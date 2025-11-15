document
  .querySelector(".container-fluid")
  .addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = "#00ff00";
  });

document.querySelector(".container").addEventListener("click", (event) => {
  event.stopPropagation();
  event.currentTarget.style.backgroundColor = "#ffffff";
});

document.querySelector(".card").addEventListener("click", (event) => {
  event.stopPropagation();
  event.currentTarget.style.backgroundColor = "#000000";
});
