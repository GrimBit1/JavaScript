const prompt=require("prompt-sync")({sigint:true});


// Question 
let a = parseInt(Math.random()*101)
console.log(a);
let arr = []

while (true) {
let b = parseInt(prompt("Guess the number"))
  if (a==b){
    console.log(`You are correct`);
    break
  }
else if (a>b){
console.log(`The number is smaller than the correct one`);}
else {
console.log(`The number is bigger than the correct one`);}
  arr.push(b)
  

   ;
}
let i = 100 -arr.length
console.log(`Your score is ${i} %`);
// hi im alive