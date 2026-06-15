import { getPostsList, addPost, removePost } from "./model.js";

const inputName = document.querySelector("#inputName");
const inputWish = document.querySelector("#inputWish");
const ul = document.querySelector("#list");

// UI - presentation logic
function updateUI() {
  ul.innerHTML = "";
  const posts = getPostsList();
  for (const item of posts) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}:</strong> ${item.wish}`;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      removePost(item);
      updateUI();
    });

    li.style.cursor = "pointer";
    li.addEventListener("mouseenter", () => {
      li.style.backgroundColor = "#f0f0f0";
    });
    li.addEventListener("mouseleave", () => {
      li.style.backgroundColor = "";
    });
  }
  inputName.value = "";
  inputWish.value = "";
}

// Controller
addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btnPost").addEventListener("click", () => {
    const name = inputName.value;
    const wish = inputWish.value;
    const newPost = { name: name, wish: wish };
    addPost(newPost);
    updateUI();
  });
});
