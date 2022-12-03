const prompt=require("prompt-sync")({sigint:true});

let obj ={
    harry:98,
    rohan:70,
    aakash:7
}
/*
for (const key in obj) {
   console.log(key,obj[key])
}
*/
// for(let i = 0;i<=Object.keys(obj).length; i++){
//     console.log("The marks of" obj. )

// }

// problem no 3
let a = parseInt(prompt("Enter 4 digits number:"))
let b =4567
if(a!=b){
    console.log("Try Again")
}
else{
    console.log("Perfect")
}