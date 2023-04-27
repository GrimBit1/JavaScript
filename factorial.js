const prompt=require("prompt-sync")({sigint:true});

let a = parseInt(prompt("Enter a number: "))
for(let i = (a-1);i>0;i--){
   a*=i
}
console.log(a)

// New Method for factorial
