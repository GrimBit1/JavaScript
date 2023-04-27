console.log(console); // This will print all the console object

console.log("Hi"); // log means a message which will print in console

console.assert(44 < 4); // Assert means if condition is false it will give an error
console.log(4 == "4");

// console.clear() // this will clear whole console
let obj = {
  a: 3,
  b: 3,
  c: 3,
  d: 3,
};
console.table(obj); // this will make an table for an object

console.warn("Hey you r bad boy") // will warn in console

console.error("Hey you r bad boy") // will error in console

// Timer in console
console.time("a") // will give time taken between these two
console.timeEnd("a")