addEventListener("DOMContentLoaded", () => {
  const joke = document.querySelector("#setup")
  const punchline = document.querySelector("#punchline")
    randomJoke();

  function randomJoke() {
    joke.innerHTML = "Loading...";
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        joke.innerHTML = data.setup;
        punchline.innerHTML = data.punchline;
        
      })
  }

  document
    .querySelector("#get-joke")
    .addEventListener("click", randomJoke);
});
