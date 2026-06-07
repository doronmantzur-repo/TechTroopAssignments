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

//

// const distributions = {
//   1: {},
//   2: {},
//   3: {}
// }

// distributions[1]["a"] = 1
// console.log(distributions)

// const numbers = [8, 9, 12, 3, 5, 9, 1, 11, 4, 8];
// for (let i = 0; i < numbers.length; i++) {
//     for(let j = i + 1; j < numbers.length; j++){
//         if (numbers[i] === numbers[j]) {
//             console.log(`${numbers[i]} has a duplicate`);
//         }
//     }
// }

// const numbers = [8, 9, 12, 3, 5, 9, 1, 11, 4, 8];
// sortedNumbers = numbers.sort((a, b) => a - b);
// for(let i=0; i< sortedNumbers.length - 1; i++){
//     if(sortedNumbers[i] === sortedNumbers[i+1]){
//         console.log(`${sortedNumbers[i]} has a duplicate`);
//     }
// }

// const numbers = [8, 9, 12, 3, 5, 9, 1, 11, 4, 8];
// const target = 15;

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === target) {
//       console.log(`${numbers[i]} and ${numbers[j]} sum to ${target}`);
//     }
//   }
// }

// const numbers = [8, 9, 12, 3, 5, 9, 1, 11, 4, 8];
// const target = 17;
// sortedNumbers = numbers.sort((a, b) => a - b);
// let i = 0;
// let j = sortedNumbers.length - 1;

// while (i < j) {
//   while (sortedNumbers[i] === sortedNumbers[i + 1]) {
//     i++;
//   }
//   while (sortedNumbers[j] === sortedNumbers[j - 1]) {
//     j--;
//   }
//   if (sortedNumbers[i] + sortedNumbers[j] === target) {
//     console.log(`${sortedNumbers[i]} and ${sortedNumbers[j]} sum to ${target}`);
//     return true;
//   }
//   else if (sortedNumbers[i] + sortedNumbers[j] < target) {
//     i++;
//   } else {
//     j--;
//   }
// }


// const numbers = [8, 9, 12, 3, 5, 9, 1, 11, 4, 8];
// const target = 17;


// function longestWord(str) {
//   const words = str.split(" ");
//   let longest = "";
//   length = 0;
//   for (word of words){
//     if (word.length > length){
//         longest = word;
//         length = word.length;
//     }
//   }
//   return longest;
// }

// console.log(longestWord("the quick brown fox"));
// console.log(longestWord("cat elephant dog"));
// console.log(longestWord("one two six ten"));


function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }else{
    aMap = new Map(a.split("").map((ch, i) => [ch, i]));
    bMap = new Map(b.split("").map((ch, i) => [ch, i]));
    for (const [key, val] of aMap){
        if ((bMap.get(key) !== val) || !bMap.has(key)){
            return false;
        }
    }
    return true;
  }
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("car", "cat")); // true