const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const frame = document.querySelector(".frame");
const panel = document.querySelector(".panel");
const core = document.querySelector(".core");

container.addEventListener("click", () => console.log("From Container"));
wrapper.addEventListener("click", () => console.log("From Wrapper"));
frame.addEventListener("click", () => console.log("From Frame"));
panel.addEventListener("click", () => console.log("From Panel"));
core.addEventListener("click", () => console.log("From Core"));
