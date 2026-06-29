let userId = 0;

export function updateUser(results) {
  document.querySelector("#user-name").innerHTML =
    `${results[0].name.first}  ${results[0].name.last} <br>
    ${results[0].location.city}, ${results[0].location.country}`;

  document.querySelector(".image-frame").innerHTML =
    `<img id = "user-id" src= "${results[0].picture.large}" >`;

  let friendsStr = "";
  for (let i = 1; i <= 7; i++) {
    friendsStr += `${results[i].name.first}  ${results[i].name.last} <br><br>`;
  }
  document.querySelector(".right").innerHTML = friendsStr;
}

export function updatequote(quote) {
  const quoteInput = document.querySelector(".user-quote");
  quoteInput.innerHTML = `Favorit quote:<br> ${quote.quote}`;
}

export function updatePokemon(pokemon) {
  document.querySelector(".pokemon-frame").innerHTML =
    `<img class = "pokemon-img" src= "${pokemon.imgUrl}" >`;
  document.querySelector(".pokemon-name").innerHTML =
    `Favorite Pokemon: ${pokemon.name
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())}`;
}

export function updateAboutMe(aboutMeText) {
  const firstParagraph = aboutMeText.split("\n")[0].trim();
  document.querySelector(".about-me p").innerText = firstParagraph;
  let btn = document.querySelector("#button");
  btn.disabled = false;
}

export function saveUser() {
  const user = {};

  user.name = document.querySelector("#user-name").innerHTML;
  user.image = document.querySelector(".image-frame").innerHTML;
  user.friends = document.querySelector(".right").innerHTML;
  user.quote = document.querySelector(".user-quote").innerHTML;
  user.pokemonImg = document.querySelector(".pokemon-frame").innerHTML;
  user.pokemonName = document.querySelector(".pokemon-name").innerHTML;
  user.aboutMe = document.querySelector(".about-me p").innerText;

  const items = JSON.parse(localStorage.getItem("savedUsers")) || [];
  const exists = items.some((u) => u.name === user.name);
  if (!exists) {
    items.push(user);
    localStorage.setItem("savedUsers", JSON.stringify(items));
    const select = document.getElementById("users");
    const option = document.createElement("option");
    option.value = userId;
    userId += 1;
    option.textContent = user.name.split("<br>")[0];
    select.appendChild(option);
  }
}

export function loadUser(userId) {
  const items = JSON.parse(localStorage.getItem("savedUsers")) || [];
  let user = items[userId];
  document.querySelector("#user-name").innerHTML = user.name;
  document.querySelector(".image-frame").innerHTML = user.image;
  document.querySelector(".right").innerHTML = user.friends;
  document.querySelector(".user-quote").innerHTML = user.quote;
  document.querySelector(".pokemon-frame").innerHTML = user.pokemonImg;
  document.querySelector(".pokemon-name").innerHTML = user.pokemonName;
  document.querySelector(".about-me p").innerText = user.aboutMe;
}

export function deleteSavedUsers() {
  localStorage.removeItem("savedUsers");
}

export function disableUserButton() {
  const btn = document.getElementById(".button");
  btn.disabled = true;
}
