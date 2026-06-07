import { myBank } from "./module.mjs";
import promptSync from "prompt-sync";
const prompt = promptSync();
const bank = myBank();

const instructions =
  "=== Banking System ===\n1) Check Balance\n2) Deposit Money\n3) Withdraw Money\n4) Exit\nChoose option (1-4):";
while (true) {
  console.log(instructions);
  let selectedOption = prompt();

  if (selectedOption === "1") {
    console.log("Your balance is: " + bank.checkBalance() + "\n");
  } else if (selectedOption === "2") {
    console.log("Enter amount to deposit:");
    let amount = Number(prompt());
    let newBalance = bank.deposit(amount);
    console.log(`${amount} deposited. Your new balance is: ${newBalance}\n`);
  } else if (selectedOption === "3") {
    console.log("Enter amount to withdraw:");
    let amount = Number(prompt());
    let newBalance = bank.withdraw(amount);
    console.log(`${amount} withdrawn. Your new balance is: ${newBalance}\n`);
  } else if (selectedOption === "4") {
    console.log("Exiting...");
    break;
  } else {
    console.error(
      "Invalid operation. Please select a valid option (1-4).\n",
    );
  }
}
