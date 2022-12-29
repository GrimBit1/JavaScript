const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter the binary number")
let num = parseInt(a)
let i = a.length
let j = i-1
let b = 0
let sum = 0
while (j>=0){
    if (a[b]==1) {
      sum += (2**j)  
    }
    j-=1
    b+=1
}
console.log(sum)