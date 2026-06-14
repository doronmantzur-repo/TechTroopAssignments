const nameInput = document.querySelector("#nameInput");
const salaryInput = document.querySelector("#salary");
const birthdayInput = document.querySelector("#birthday");
const phoneInput = document.querySelector("#phone");
const errMsgElemnt = document.querySelector("#errMsg");

//UI
function updateErrMsg(message) {
  
  errMsgElemnt.innerHTML = message;
}

function displayWelcomeMessage(name) {
  nameInput.style.display = "none";
  salaryInput.style.display = "none";
  birthdayInput.style.display = "none";
  phoneInput.style.display = "none";
  const labels = document.querySelectorAll(".label");
  labels.forEach(element => {
    element.style.display = "none";
  });
  document.querySelector(".right").style.display = "none";
  errMsgElemnt.style.color = "black";
  errMsgElemnt.style.fontSize = "30px";
  errMsgElemnt.innerHTML = `Welcome ${name}`
}

// Controller
addEventListener("DOMContentLoaded", () => {
  document.querySelector("#submitBtn").addEventListener("click", () => {
    const name = nameInput.value;
    const salary = Number(salaryInput.value);
    const birthday = birthdayInput.value;
    const phone = phoneInput.value;

    let message = "";
    if (name.length < 3) {
      message = "Name have to include at least 2 charaters";
    } else if (salary < 10000 || salary > 60000) {
      message = "The salary range must be between 10,000 and 60,000";
    } else if (birthday === "") {
      message = "Birthday is a mandatory field";
    } else if (phone.length < 10 || phone.length > 10) {
      message = "Phone number should be 10 digits long";
    }
    if (message !== "") {
      updateErrMsg(message);
    } else {
       updateErrMsg(message);
      displayWelcomeMessage(name);
    }
  });
});
