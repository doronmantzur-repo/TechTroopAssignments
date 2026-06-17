import {BOOKS_API_KEY} from "./keys.js"
const URL = "https://www.googleapis.com/books/v1/volumes?q=:isbn:"


function getBooks(isbn){
    const url = `${URL}${isbn}&key=${BOOKS_API_KEY}`
    axios.get(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log(err));
}



// Controller
addEventListener("DOMContentLoaded", () => {
  
    document.querySelector("#get-books").addEventListener("click", () => {
    getBooks("1440633908 ");
  });

});