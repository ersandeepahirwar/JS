const first = (event) => {
  event.target.style.backgroundColor = "#C1C1C1";
};

const second = (event) => {
  event.target.style.backgroundColor = "#F5F5F5";
};

const third = (event) => {
  event.target.style.boxShadow = "0px 10px 10px 0px rgba(255, 255, 255, 0.25)";
};

/* 
const submitForm = () => {
  alert(`Hi ${document.getElementById("name").value}, How are you?`);
};
*/

const submitForm = (event) => {
  event.preventDefault();
  alert(`Hi ${document.getElementById("name").value}, How are you?`);
};
