addEventListener("DOMContentLoaded", () => {

  document.querySelector("#btnAdd").addEventListener("click", () => {
    const input = document.querySelector("#input");
    const p = document.querySelector("#data");
    p.innerHTML = input.value;
    input.value = "";

    
  });
});