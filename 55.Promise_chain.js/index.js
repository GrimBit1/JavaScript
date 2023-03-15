console.log("Hi");
let p = new Promise((resolve, reject) => {
    console.log("Im in the Promise");
    setTimeout(() => {
        console.log("Im in the setimeout promise");
        resolve("Aditya");
    }, 2000);
});
p.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        console.log("Im the second promise");
        setTimeout(() => {
            resolve(5);
            console.log("Im the second promise");
        }, 2000);
    });
    return p2;
}).then((value) => {
    console.log(value)
    console.log("The second promise is done");
});
// This function returns void
