// Strings are used to store or manipulate text
// We can make strings in 3 ways
let i ="Aditya" // With Double qoute ""
let me ='Aditya' // With Single qoute ''
let a = `Aditya`// With Chapstick
//we can also use variable in a string with chapstick 
a = `${me}`
console.log(a);

// Escape sequence characters 
console.log('Hello \' World'); // \ works as escape character which breaks a string define

console.log(`Hi im \nAditya`); // \n breaks the sequence and put that in new line

console.log(`Hi im \tAditya`);
// \t put the tab in the sentence 

console.log(`Hi im \rAditya`);
//Anything before \r doesn't print 