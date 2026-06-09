const heading = document.querySelectorAll("#heading");
console.log(heading[0].innerText);

const paragraph = document.querySelectorAll(".paragraph");
console.log(paragraph[0].innerText);

const li = document.querySelectorAll("li");
for (let i of li) {
  console.log(i.innerText);
}

const heading_and_paragraph = document.querySelectorAll([
  "#heading",
  "#paragraph",
]);
console.log(heading_and_paragraph[0].innerText);
console.log(heading_and_paragraph[1].innerText);
