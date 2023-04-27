console.log("hi");


// let promise = new Promise((resolve, reject) => {
//     console.log("Im the promise and still pending");

//     setTimeout(() => {
//         // resolve('Im done');

//         reject(new Error("Im an Error"));

//     }, 2000);

// });


// promise.then((value) => {
//--                              .then runs when the promise is resolved
//     console.log(value);

// });


// promise.catch((error) => { // this will work when error is came and it will catch the error and not log the error
//     console.log(error)
//     console.log("some error occured");

// });


let promise1 = new Promise((resolve, reject) => {
  // This 2 promise will work at same time in the background
  console.log("Hi im promise no 1");

  setTimeout(() => {
    console.log("Hi im promise no 1 after 5 seconds ");

    resolve(56);

  }, 5000);

});

let promise2 = new Promise((resolve, reject) => {
  console.log("Hi im promise no 2");

  setTimeout(() => {
    console.log("Hi im promise no 2 after 5 seconds ");

    reject("This got error");

  }, 5000);

});

// to get the value of the done promise
promise1.then((value) => {
  console.log(value);

});
//to catch the error
promise2.catch((error) => {
  console.log("Error occured");

});

//just checking some experiment 
console.log("Just for fun");
setTimeout(()=>{
  console.log("Just for fun after 5 seconds")
},5000)
