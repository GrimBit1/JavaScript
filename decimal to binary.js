const prompt=require("prompt-sync")({sigint:true});

let z = (prompt("Enter the number"))
console.log(typeof z);
let num = parseInt(z)
let a = z.length
let bin =[]
let i = 0
while (num>0) {
   if (num%2==1) {
       bin[i]=1
   }
   else{
     bin[i]=0
     }
   num = parseInt(num/2)
   i+=1  
   ;
}
console.log(bin.reverse());
let b = bin.join("")
console.log(b)