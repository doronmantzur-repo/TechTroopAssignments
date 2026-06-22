import {
  updateUser,
  updatequote,
  updatePokemon,
  updateAboutMe,
  saveUser,
  loadUser,
  deleteSavedUsers,
} from "./render.js";

const usersArr = [];
const userName = "";
const friends = [];
const pokemonNmae = "";
const pockemonImg = "";
const quote = "";

function getRandomUser() {
  const randomUserUrl = "https://randomuser.me/api/?results=8";
  axios
    .get(randomUserUrl)
    .then((res) => {
      updateUser(res.data.results);
    })
    .catch((err) => console.log(err));
}

function getFriends() {
  const friends = [];
  const randomUserUrl = "https://randomuser.me/api/?format=json";
  for (let i = 0; i < 7; i++) {
    axios
      .get(randomUserUrl)
      .then((res) => {
        res.data.results.forEach((friend) => {
          updateFriends(friend.name);
        });
      })
      .catch((err) => console.log(err));
  }
}

function getQuote() {
  const quoteUrl = "https://api.kanye.rest";
  axios
    .get(quoteUrl)
    .then((res) => {
      updatequote(res.data);
    })
    .catch((err) => console.log(err));
}

function getPokemon() {
  let random = Math.floor(Math.random() * 1000) + 1;
  const poiUrl = `https://pokeapi.co/api/v2/pokemon/${random}`;
  axios
    .get(poiUrl)
    .then((res) => {
      updatePokemon({
        name: res.data.name,
        imgUrl: res.data.sprites.back_default,
      });
    })
    .catch((err) => console.log(err));
}

function getAboutMeText() {
  const abotMeUrl =
    "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text";
  axios
    .get(abotMeUrl)
    .then((res) => {
      updateAboutMe(res.data);
    })
    .catch((err) => console.log(err));
}

//Controller
addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("#button");
  btn.addEventListener("click", () => {
    btn.disabled = true;
    getRandomUser();
    getQuote();
    getPokemon();
    getAboutMeText();
  });

  document.querySelector("#save-btn").addEventListener("click", () => {
    saveUser();
  });

  const usersSelect = document.getElementById("users");
  usersSelect.addEventListener("change", () => {
    const userId = usersSelect.value;
    const text = usersSelect.options[usersSelect.selectedIndex].text;
    if(text !== "Select User") loadUser(userId);
  });
});

deleteSavedUsers();
