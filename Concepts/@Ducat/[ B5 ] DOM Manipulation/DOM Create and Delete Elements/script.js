let container = document.querySelector("#container");
let paragraphs = document.querySelector("#paragraphs");

let count = 1;
const createNewElement = () => {
  const p = document.createElement("p");
  p.id = `paragraph-${count}`;
  p.innerHTML = `Paragraph ${count} <span onclick="deleteElement('paragraph-${count}')" class="material-symbols-outlined">delete</span>`;
  count++;
  paragraphs.appendChild(p);
};

const deleteElement = (id) => {
  paragraphs.removeChild(document.getElementById(id));
};

const deleteFirstElement = () => {
  if (paragraphs.childNodes.length > 0) {
    paragraphs.removeChild(paragraphs.childNodes[0]);
  }
};

const deleteAllElements = () => {
  if (paragraphs.childNodes.length > 0) {
    container.removeChild(paragraphs);
    paragraphs = document.createElement("div");
    paragraphs.id = "paragraphs";
    paragraphs.classList.add("paragraphs");
    container.appendChild(paragraphs);
  }
};
