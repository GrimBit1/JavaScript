setTimeout(() => {
    console.log("After 1 second");

}, 1000);

// try catch runs syncroniously 
try {
    // try means try this code and if it gives error catch it dont block any other code
    console.log(aditya); // we didn't declare this variable so it gives error

} catch (error) {
    // This catches the error
    console.log("Error agaya " + error);

}

setTimeout(() => {
    console.log("After 2 second");

}, 2000);


setTimeout(() => {
    console.log("After 3 second");

}, 3000);


setTimeout(() => {
    console.log("After 4 second");

}, 4000);

