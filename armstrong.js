// Code for armstrong number
const prompt = require("prompt-sync")();

let num = prompt("Enter a number ");
let sum = 0;
let temp = parseInt(num);
for (let i = 0; i < num.length; i++) {
  sum += parseInt(num[i]) ** num.length;
}
if (sum == temp) {
  console.log("Armstrong number");
} else {
  console.log("Not an armstrong number");
}
