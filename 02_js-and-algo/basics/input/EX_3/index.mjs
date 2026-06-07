import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const registrationSum = [];

rl.question("What is your name? ", (nameAnswer) => {
  rl.question("What is your Email?", (emailAnswer) => {
    rl.question("What is your Age?", (ageAnswer) => {
      rl.question("What is you favorite color?", (colorAnswer) => {
        registrationSum.push({
          Name: nameAnswer,
          Email: emailAnswer,
          Age: ageAnswer,
          "Favorite Color": colorAnswer,
        });
        const obj = registrationSum[0];
        console.log("\nRegistration Summary:");
        for (const key in obj) {
          console.log(key + ": " + obj[key]);
        }
        rl.close();
      });
    });
  });
});
