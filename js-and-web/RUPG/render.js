const friends = [];
let userquote = "";
export function updateUser(user) {
  document.querySelector("#user-name").innerHTML =
    `${user.name.first}  ${user.name.last} <br>
    ${user.location.city}, ${user.location.country}`;

  document.querySelector(".image-frame").innerHTML =
    `<img id = "user-id" src= "${user.imageUrl.large}" >`;
  console.log(`<img id = "user-id" src= "${user.imageUrl.large}" >`);
}

export function updateFriends(friend) {
  friends.push(friend);
  if (friends.length === 7) {
    let friendsStr = "";
    for (let friend of friends) {
      friendsStr += `${friend.first}  ${friend.last}<br><br>`;
    }
    document.querySelector(".right").innerHTML = friendsStr;
  }
}

export function updatequote(quote) {
  userquote = quote;
  const quoteInput = document.querySelector(".user-quote");
  quoteInput.innerHTML = `Favorit quote:<br> ${userquote.quote}`;
}

export function updatePokemon(pokemon) {
  document.querySelector(".pokemon-frame").innerHTML =
    `<img class = "pokemon-img" src= "${pokemon.imgUrl}" >`;
  document.querySelector(".pokemon-name").innerHTML =
    `Favorite Pokemon: ${pokemon.name}`;
}

export function updateAboutMe(aboutMeText) {
  const firstParagraph = aboutMeText.split("\n")[0].trim();
  document.querySelector(".about-me p").innerText = firstParagraph;
}
