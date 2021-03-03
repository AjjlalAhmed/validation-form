const input = document.querySelectorAll(".form-control > input");
const submitBtn = document.querySelector(".submit-btn");
let message = {
  empty: "input is empty",
  wrongEmail: "please type correct email",
  wrongPassword: "password lenght is too weak",
  correct: "correct",
};
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let values = [];
  input.forEach((item) => {
    if (item.value != "") {
      if (item.id == "name" && item.value != "") {
        inputSccess(values, item);
      }
      if (item.id == "email" && emailPattern.test(item.value) === false) {
        item.nextElementSibling.innerHTML = message.wrongEmail;
        item.nextElementSibling.classList.add("input-failed");
      }
      if (item.id == "email" && emailPattern.test(item.value)) {
        inputSccess(values, item);
      }
      if (item.id == "password" && item.value.length <= 7) {
        item.nextElementSibling.innerHTML = message.wrongPassword;
        item.nextElementSibling.classList.add("input-failed");
      }
      if (item.id == "password" && item.value.length >= 8) {
        inputSccess(values, item);
      }
      return;
    } else {
      item.nextElementSibling.innerHTML = message.empty;
      item.nextElementSibling.classList.add("input-failed");
    }
  });
  console.log(values.length);
  if(values.length == 3){
      alert("account save")
  }
});
function inputSccess(values, item) {
  console.log(item);
  console.log(values);
  values.push(item.value);
  item.nextElementSibling.innerHTML = message.correct;
  item.nextElementSibling.className = "";
  item.nextElementSibling.classList.add("input-success");
}