const prompt=require("prompt-sync")({sigint:true});

// alert("HI")
let a = prompt("Hi please tell your age 🥺 ")
a = Number.parseInt(a)
console.log(typeof a)
console.log(a)
if (a>0) {
  console.log(`Age is valid`);
   
}
else{
  console.log("Hi")
}