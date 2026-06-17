import { GIPHY_API_KEY } from "./keys.js";
const URL = "https://api.giphy.com";

function searchGif(search) {
const image = document.querySelector("#img-id");
  axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: GIPHY_API_KEY,
        q: search,
        limit: 5,
      },
    })
    .then((res) => {
      console.log(res.data);
      const gifURL = res.data.data[0].images.original.url;
      image.src = gifURL;
    })
    .catch((err) => console.log(err));
}

// Controller
addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#search-input");
  document.querySelector("#search-gif").addEventListener("click", () => {
    // console.log(input.value)
    searchGif(input.value);
  });
});
