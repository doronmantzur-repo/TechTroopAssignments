const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}


const getCleanText = function (sentence) {
  let splitText = sentence.split(" ")
  for(const word of splitText) {
    lcWord = word.toLowerCase();
      if (!specialChars.includes(word) && !(lcWord in wordCounts)) {
        wordCounts[lcWord] = 0;
      }
  }
};


const addToCounter = function (word) {
  wordCounts[word]++;
};


const countWords = function (sentence) {
  getCleanText(sentence);
  for (const word of sentence.split(" ")) {
    if (!specialChars.includes(word)) {
      addToCounter(word.toLowerCase());
    }
  }
};

countWords(story)
console.log(wordCounts)
