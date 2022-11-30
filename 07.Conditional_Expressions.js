const prompt=require("prompt-sync")({sigint:true});

// alert("HI")
let a = prompt("Hi please tell your age 🥺 ")
a = Number.parseInt(a)
console.log(typeof a)
console.log(a)

if(a=0){
  console.log("Age is invalid");
}
else if(a>9 && a<18){
  console.log("You are Teen!")
}
else if(a>=18 && a<40){
  console.log("You are Eighteen!")
}
else{
  console.log("Hi")
}

//Switch statement







a=18
//Ternary operator 
console.log("Hi Im" , a<18? "Aditya":"Adi")