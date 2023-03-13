console.log("hi");
let promise = new Promise((resolve, reject) => {
    console.log("Im the promise and still pending");
    setTimeout(() => {
        // resolve('Im done');
        reject(new Error("Im an Error"));
    }, 2000);
});

// promise.then((value) => {
//     // Then runs when the promise is resolved
//     console.log(value);
// });

promise.catch((error) => { // this will when error is came and it will catch the error and not log the error
    console.log(error)
    console.log("some error occured");
});
