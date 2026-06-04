// const sentence = "the quick brown fox jumps over the lazy dog the fox";

// const count = function (str) {
//   const wordCount = {};
//   for (word of str.split(" ")) {
//     if (!(word in wordCount)) {
//       wordCount[word] = 1;
//     } else {
//       wordCount[word]++;
//     }
//   }
//   return wordCount;
// };

// const newCount = sentence.split(" ").reduce((acc, word) => {
//   if (!(word in acc)) {
//     acc[word] = 1;
//   } else {
//     acc[word]++;
//   }
//   return acc;
// }, {});


// const add = function(a){
//     return function(b){
//         return a + b;
//     }
// }


// console.log(add(5)(2));
// console.log(count(sentence));
// console.log(newCount);


//#1
// Given an array of integers, return the largest number in the array.
// You may not use any built-in max functions.
//
// Constraints: the array will always have at least one element.
// Think about what variable you need to track as you loop through.
//
// Hint: start by assuming the first element is the max, then update
// your assumption as you go.
//
// Input:  [3, 7, 1, 9, 4]  →  Output: 9
// Input:  [-5, -1, -8, -3] →  Output: -1

// function findMax(arr) {
//   return arr.reduce((max, number) => {if (number > max) {max = number}; return max}, arr[0])
// } 


// const numbers = [-5, -1, -8, -3] 
// const max = findMax(numbers)
// console.log(max)


//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
// Input:  "hello"     →  Output: "olleh"
// Input:  "algorithm" →  Output: "mhtirogla"

// function reverseString(str) {
//     strArr = str.split("")
//     let reversed = ""
//     for(i=strArr.length-1; i>=0; i--){
//         reversed += strArr[i]
//     }
//     return reversed
// }

// console.log(reverseString("hello"))     // Output: "olleh"
// console.log(reverseString("algorithm")) // Output: "mhtirogla"

//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3
// Input:  "Algorithm"   →  Output: 3

// function countVowels(str) {

//   const vowels = "aeiouAEIOU";
//   const chars = str.split("");
//   return chars.reduce((counter, char) => {if (vowels.includes(char)) { counter++};return counter},0)
// }

// console.log(countVowels("aeaeae")) // Output: 3
// console.log(countVowels("Algorithm"))   // Output: 3

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}