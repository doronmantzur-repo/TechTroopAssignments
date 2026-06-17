import {BOOKS_API_KEY} from "./keys.js"
const URL = "https://www.googleapis.com/books/v1/volumes?q=:"


function getBooks(queryType, queryValue){
    const url = `${URL}${queryType}:${queryValue}&key=${BOOKS_API_KEY}`
    axios.get(url)
    .then(res => {
        // console.log(res.data);
        res.data.items.forEach(element => {
            console.log(`Title: ${element.volumeInfo.title}`)
            console.log(`Author: ${element.volumeInfo.authors[0]}`)
            console.log(`Language: ${element.volumeInfo.language}`)
        });
    })
    .catch(err => console.log(err));
}



// Controller
addEventListener("DOMContentLoaded", () => {
  
    document.querySelector("#get-books").addEventListener("click", () => {
    getBooks("title", "The Wise Man's Fears ");
  });

});