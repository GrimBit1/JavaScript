const prompt=require("prompt-sync")({sigint:true});
// for(let /* This is statement 1*/i=0 ;/* This is statement 2 */i<=10 ;/* This is statement 3 */ i++){
//   console.log("Hi",i)
// }
// //Statement 1 is a declaration it will only run first time
// // Statement 2 is a condition, the loop will only run if the condition is true 
// // Statement 3 is code that will execute after the one loop completes


let a = 0;
let sum = parseInt(prompt("Enter Limit"))
for (let i = 0; i<sum; i++) {
  a+= (i+1)
}
console.log(`The sum of ${sum} number is ${a}`);

//for in loop is used in object for key
let obj = {
  aditya : "Aditya",
  aditya1 : "Aditya1",
  adity2 : "Adity2",
  shiv : "Shiv"
}
for(let a in obj){
  console.log(a,obj[a])
}