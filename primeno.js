const prompt=require("prompt-sync")({sigint:true});
let a = parseInt(prompt("Enter A number "))
let b = parseInt(prompt("Enter A number "))
for(a=a ;a<=b;a++){
    for(let i = a;i<=b;)
    let c = a%i
    console.log(a)
    console.log(i)
    // if(c==0){
    //   console.log(a)
    // }
    // else{

    // }
}