const wisdom = [];
let counter = 0;

addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btnAdd").addEventListener("click", () => {
    const input = document.querySelector("#input");
    const p = document.querySelector("#data");
    p.innerHTML = input.value;
    let textObj = { name: input.value };
    wisdom.push(textObj);
    input.value = "";
    counter++;
    if (counter % 2 === 0) {
      localStorage.setItem("wisdom", wisdom);
    }
  });

  window.addEventListener("pageshow", function (event) {
    // Your logic here
    // console.log("Browser is refreshing or closing");

    // If you want to block navigation (optional):
    // event.preventDefault();
    // event.returnValue = "";
    let LS = localStorage.getItem("wisdom");
    console.log(LS);
    const p = document.querySelector("#data");
    p.innerHTML = LS || "";
  });
});
