import {
  updateUser,
  updateFriends,
  updatequote,
  updatePokemon,
  updateAboutMe,
} from "./render.js";

const usersArr = [];
const userName = "";
const friends = [];
const pokemonNmae = "";
const pockemonImg = "";
const quote = "";

function getRandomUser() {
  const randomUserUrl = "https://randomuser.me/api/?format=json";
  axios
    .get(randomUserUrl)
    .then((res) => {
      // console.log(res.data);
      //console.log(res.data.results[0].name);
      updateUser({
        name: res.data.results[0].name,
        location: res.data.results[0].location,
        imageUrl: res.data.results[0].picture,
      });
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
        updateFriends(res.data.results[0].name);
      })
      .catch((err) => console.log(err));
  }
}

function getQuote() {
  const quoteUrl = "https://api.kanye.rest";
  axios
    .get(quoteUrl)
    .then((res) => {
      // console.log(res.data);
      updatequote(res.data);
    })
    .catch((err) => console.log(err));
}

function getPokemon() {
  const poiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
  axios
    .get(poiUrl)
    .then((res) => {
      // console.log(res.data);
     updatePokemon({name:res.data.name, imgUrl:res.data.sprites.back_female});
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
  document.querySelector("#button").addEventListener("click", () => {
    getRandomUser();
    getFriends();
    getQuote();
    getPokemon();
    getAboutMeText();
  });
});
