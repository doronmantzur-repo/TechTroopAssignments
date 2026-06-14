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

// function isAnagram(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }else{
//     aMap = new Map(a.split("").map((ch, i) => [ch, i]));
//     bMap = new Map(b.split("").map((ch, i) => [ch, i]));
//     for (const [key, val] of aMap){
//         if ((bMap.get(key) !== val) || !bMap.has(key)){
//             return false;
//         }
//     }
//     return true;
//   }
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world")); // false
// console.log(isAnagram("car", "cat")); // true

// Given an array of integers and a target number, return all pairs
// of elements that add up to the target. Each pair should be returned
// as an array of two numbers, and you should return an array of all pairs.
// Avoid duplicate pairs.
//
// Constraints: the array may contain positive and negative integers.
// A number cannot be paired with itself at the same index.
//
// Hint: think about every possible combination of two elements,
// then check if they add up to the target.
//
// Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

// function findPairs(arr, target) {
//   // your code here
//   const dataObj = {};
//   pairArr = [];
//   for (const element of arr) {
//     if (!dataObj[element]) {
//       dataObj[element] = 1;
//     }
//     else{
//       dataObj[element]++;
//     }
//     requested = target - element;
//     if (dataObj[requested] && (requested !== element) && (dataObj[requested] > 1)) {
//       // Handle the case where the requested number exists in the object
//       pairArr.push([element, requested]);
//     }
//   }
//   return pairArr;
// }

// // Tests
// console.log(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
// console.log(findPairs([1, 1, 2, 3], 4));     // → [[1,3]]
// console.log(findPairs([0, -1, 2, -3], -1));  // → [[0,-1], [2,-3]]

//9
// Given a string of words separated by spaces, return the sentence
// with the word order reversed. The words themselves should stay intact.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in reverse functions.
//
// Input:  "hello world"          →  Output: "world hello"
// Input:  "the quick brown fox"  →  Output: "fox brown quick the"
// Input:  "one"                  →  Output: "one"

// function reverseWords(str) {
//   let strArr = str.split(" ");
//   let result = [];

//   for (let i = strArr.length; i > 0; i--) {
//     item = strArr[i - 1];
//     result.push(item);
//   }
//   return result.join(" ");
// }

// // Tests
// console.log(reverseWords("hello world")); // → "world hello"
// console.log(reverseWords("the quick brown fox")); // → "fox brown quick the"
// console.log(reverseWords("one")); // → "one"

// #10
// Given a sorted array of integers, remove the duplicates in-place
// so each element appears only once, and return the new length.
// The array is sorted, so duplicates will always be adjacent.
//
// Constraints: do not create a new array, modify the original in-place.
// The order of elements must stay the same.
//
// Input:  [1, 1, 2, 3, 3, 4]  →  Output: 4  (array becomes [1, 2, 3, 4])
// Input:  [1, 1, 1, 1]        →  Output: 1  (array becomes [1])
// Input:  [1, 2, 3]           →  Output: 3  (no duplicates, unchanged)

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     {
//       if (arr[i] === arr[i + 1]) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   console.log(arr);
//   console.log(arr);
// }

// // Tests
// console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // → 4
// console.log(removeDuplicates([1, 1, 1, 1])); // → 1
// console.log(removeDuplicates([1, 2, 3])); // → 3

// #11
// Given two arrays, return a new array containing only the elements
// that appear in both arrays. Each element in the result should be unique.
//
// Constraints: the result can be in any order.
// Each element in the result must appear only once even if it
// appears multiple times in both arrays.
//
// Input:  [1, 2, 3, 4], [3, 4, 5, 6]     →  Output: [3, 4]
// Input:  [1, 1, 2, 3], [1, 2, 2]        →  Output: [1, 2]
// Input:  [1, 2, 3],    [4, 5, 6]        →  Output: []

// function intersection(arr1, arr2) {
//   max = Math.max(arr1.length, arr2.length);
//   const arr1Hash = Array(max+1).fill(false);
//   const arr2Hash = Array(max+1).fill(false);

//   for (const element of arr1) {
//     arr1Hash[element] = true;
//   }

//   for (const element of arr2) {
//     arr2Hash[element] = true;
//   }

//   const result = [];
//   for (let i = 0; i < max+1; i++) {
//     if (arr1Hash[i] && arr2Hash[i]) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// // Tests
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // → [3, 4]
// console.log(intersection([1, 1, 2, 3], [1, 2, 2]));     // → [1, 2]
// console.log(intersection([1, 2, 3], [4, 5, 6]));        // → []

// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

// function lengthOfLongestSubstring(str) {
//   let strArr = str.split("");
//   let obj = {};
//   let longest = 0;
//   for(let i=0; i<strArr.length; i++){
//     const char = strArr[i];
//     if (!obj[char]) {
//       obj[char] = 1;
//     }
//     else
//     {
//       longest = i;
//       break;
//     }
//   }
//   return longest;
// }

// // Tests
// console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // → 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // → 3
// console.log(lengthOfLongestSubstring(""));         // → 0

// #14
// Given an array of integers, move all zeros to the end
// while keeping the relative order of non-zero elements.
// Do this in-place, do not create a new array.
//
// Constraints: modify the original array in-place.
// The order of non-zero elements must stay the same.
// Do not use any extra arrays, objects, or sets.
//
// Input:  [0, 1, 0, 3, 12]  →  Output: [1, 3, 12, 0, 0]
// Input:  [0, 0, 1]         →  Output: [1, 0, 0]
// Input:  [1, 2, 3]         →  Output: [1, 2, 3]  (no zeros, unchanged)
// Input:  [0, 0, 0]         →  Output: [0, 0, 0]  (all zeros)

// function moveZeros(arr) {

//   let count = 0;
//   for (let num of arr) {
//     if (num === 0) {
//       count++;
//     }
//   }

//   let pointer = 0;
//   for(let i =0 ; i< arr.length; i++)
//   {
//     if (arr[i] !== 0){
//       arr[pointer] = arr[i];
//       pointer++;
//     }
//   }

//   for(;pointer< arr.length; pointer++)
//   {
//     arr[pointer] = 0
//   }
//   return arr;
// }

// // Tests
// console.log(moveZeros([0, 1, 0, 3, 12])); // → [1, 3, 12, 0, 0]
// console.log(moveZeros([0, 0, 1])); // → [1, 0, 0]
// console.log(moveZeros([1, 2, 3])); // → [1, 2, 3]
// console.log(moveZeros([0, 0, 0])); // → [0, 0, 0]

// function addToShoppingList() {
//   const input = document.getElementById("itemInput");
//   const value = input.value;

//   if (value === "") return;

//   const li = document.createElement("li");
//   li.textContent = value;

//   document.getElementById("shoppingList").appendChild(li);

//   input.value = "";
// }

// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById("add-btn")
//     .addEventListener("click", addToShoppingList);

//   function addToShoppingList() {
//     const input = document.getElementById("itemInput");
//     const value = input.value.trim();

//     if (value === "") return;

//     const li = document.createElement("li");
//     li.textContent = value;

//     document.getElementById("shoppingList").appendChild(li);

//     input.value = "";
//   }
// });

// #14
// Given a SORTED array of integers and a target number, return true
// if any two elements add up to the target, false otherwise.
//
// Constraints: the array is sorted in ascending order.
// You may not use any extra arrays, objects, or hash maps.
//
// Input:  [1, 2, 3, 4, 6], target 6   →  Output: true   (2 + 4 = 6)
// Input:  [1, 2, 3, 4, 6], target 11  →  Output: false  (max pair is 4+6=10)
// Input:  [-2, 1, 3, 5, 8], target 6  →  Output: true   (1 + 5 = 6)

function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    let sum = arr[left] + arr[right];
    if (arr[left] + arr[right] === target){
      return true;
    }
    else if(sum > target){
      right--;
    }
    else{
      left++
    }
  }
  return false;

  // your code here
}

// Tests
console.log(hasPairWithSum([1, 2, 3, 4, 6], 6)); // → true
console.log(hasPairWithSum([1, 2, 3, 4, 6], 11)); // → false
console.log(hasPairWithSum([-2, 1, 3, 5, 8], 6)); // → true
