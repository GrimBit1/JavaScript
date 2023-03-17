console.log("Hi");
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 49;
        console.log(a);
        resolve(a);
    }, 2000);
});

// The interpretor sees first line or then handler , it throws it to background and move on
p.then((value) => { // This one will happen before
    setTimeout(() => {
        console.log(value);
    }, 2000);
});

// But This doesn't block any flow
p.then((value) => { // Handlers are synchronous they compile as line 
    console.log("Hooray Im Done"); // This one will happen after
});
