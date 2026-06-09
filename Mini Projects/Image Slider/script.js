const img = document.querySelectorAll("img");

let index = 0;
const next = () => {
  img[index].style.display = "none";
  if (index < img.length - 1) {
    index++;
  } else {
    index = 0;
  }
  img[index].style.display = "block";
};

const prev = () => {
  img[index].style.display = "none";
  if (index === 0) {
    index = img.length - 1;
  } else {
    index--;
  }
  img[index].style.display = "block";
};

let interval = setInterval(next, 1000);

const playPause = (option) => {
  if (option === "pause") {
    clearInterval(interval);
  } else {
    interval = setInterval(next, 1000);
  }
};
