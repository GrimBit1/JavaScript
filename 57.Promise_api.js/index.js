
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("After 1 second");

    }, 11000);

});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("After 2 second");

    }, 12000);
    console.log("Hi")

});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("After 3 second");

    }, 3000);

});


//  Down one we know how it will work
// it will run acc to timeout / but sometime we dont know how much time it will take a certain promise , if we want all promise value at same time then we run promise api
// p1.then((value) => {
//     console.log(value);

// });,
// p2.then((value) => {
//     console.log(value);

// }),
// p3.then((value) => {
//     console.log(value);

// });

// These are all 6 static methods of Promise api

// let promise_all = Promise.all([p1,p2,p3]) // we provide this with an array of promise and store all in one promise
// we provide this with an array of promise and store all in one promise
// this will provide a array of result of all promise and if any one promise reject this doesn't give result of resolved only gives error



// let promise_all = Promise.allSettled([p1,p2,p3])// Returns object with status and value / this will still give result if any one promise gives error 


//let promise_all = Promise.race([p1,p2,p3]) // gives the result of promise whichever fulfilled first // but gives error on reject or something


// let promise_all = Promise.any([p1,p2,p3]) // if any one promise rejects , this just skips it


// let promise_all = Promise.resolve(6) //this returns resolved promise

let promise_all = Promise.reject( new Error('Hey')) //this returns rejected promise

promise_all.then(
    (value) => {
        console.log(value);

    },
    (value) => {
        console.log(value);

    }
);


