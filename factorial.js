const prompt=require("prompt-sync")({sigint:true});

let a = parseInt(prompt("Enter A number"))
for(let i = (a-1);i>0;i--){
   a*=i
}
console.log(a)