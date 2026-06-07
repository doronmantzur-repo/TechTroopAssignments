import promptSync from "prompt-sync";
const prompt = promptSync();

const questions = [
  "When Israel started its state?",
  "What is the capital of France?",
  "Who wrote 'Romeo and Juliet'?",
];

const answers = ["1948", "Paris", "William Shakespeare"];

console.log(`Hello, Press Enter to start the quiz...`);
prompt();
let correctAnswers = 0;
for (let i = 0; i < questions.length; i++) {
  console.log(`Question ${i + 1}: ${questions[i]}?`);
  const userAnswer = prompt();
  if (userAnswer === answers[i]) {
    console.log("Correct!");
    correctAnswers++;
  } 
}
console.log(`Final score: ${correctAnswers}/${questions.length} questions correct!`);