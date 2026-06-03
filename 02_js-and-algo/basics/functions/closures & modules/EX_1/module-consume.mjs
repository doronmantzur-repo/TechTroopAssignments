import {StringFormatter} from "./module.mjs" 

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box