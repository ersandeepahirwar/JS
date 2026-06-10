const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const frame = document.querySelector(".frame");
const panel = document.querySelector(".panel");
const core = document.querySelector(".core");

container.addEventListener("click", () => console.log("From Container"), true);
wrapper.addEventListener("click", () => console.log("From Wrapper"), true);
frame.addEventListener("click", () => console.log("From Frame"), true);
panel.addEventListener("click", () => console.log("From Panel"), true);
core.addEventListener("click", () => console.log("From Core"), true);
