// Chapter 2 Practice set
const prompt=require("prompt-sync")({sigint:true});
/*
// Problem no. 1
let age = prompt("Hi , Please tell me your age ")
if(age>=10 && age<=20){
    console.log("You are in between 10 to 20")
}

// Problem No.2
let a = prompt("Hi tell a ")
a = Number.parseInt(a)
switch (a) {
    case 10:
        console.log("Hi 10")
        break;
    case 14:
        console.log("Hi 20")
        break;

    default:
        console.log("Your age is not special")
        break;
}*/

// Problem no.3
let b = Number.parseInt(prompt("Hi please tell a number"))
console.log(typeof b)
c=b%2
d=b%3
if(c==0 &&d==0){
    console.log("The number is divisible by 2 and 3")
}
