import {myMath} from "./module.mjs" 
import promptSync from "prompt-sync";
const prompt = promptSync();
const math = myMath()

const [, , leftOperand, rightOperand, operation] = process.argv;
if (operation === "+") {
  console.log(math.add(Number(leftOperand), Number(rightOperand)));
} else if (operation === "-") {
  console.log(math.sub(Number(leftOperand), Number(rightOperand)));
} else if (operation === "*") {
  console.log(math.mult(Number(leftOperand), Number(rightOperand)));
} else if (operation === "/") {
  console.log(math.div(Number(leftOperand), Number(rightOperand)));
}else{
  console.error("Invalid operation. Please use one of the following: +, -, *, /");
}