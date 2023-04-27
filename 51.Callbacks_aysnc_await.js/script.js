const prompt = require("prompt-sync")();


// console.log("Hi")
//! Synchronous programming
// let a = prompt("What is your height")
// let b = prompt('What is your weight')
// console.log(a,b)

//!Asynchronous programming
// console.log("Start")
// setTimeout(() => {
//     console.log("Hi , this is set timeout")
// },1000)
// console.log("End")
// console.time("Hi");

// setTimeout(() => {
//   console.timeEnd("Hi");

// }, 1000);

// Callbacks
const greet = (name, cb) => { // Taking the function as parameter
  console.log("Hello " + name);

  cb(name);//  Function running after the function
};

const thank = (a) => {
  console.log(`Thank you ${a}`);

};

greet("aditya", thank);

