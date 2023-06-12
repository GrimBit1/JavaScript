// -- Optional chaining
// * Optional chaining is used to check whether the object exists if it exists then read the property of it
// Example
let obj = { name: "Aditya" };
let obj2 ;
console.log(obj); //This will print the object
console.log(obj.name); // This will print aditya
// But what if i thought there is another property like age
console.log(obj.age); // This will give me undefined
// But what if i thought there is another object like obj2
//console.log(obj2.name); // This will give refencence error like cannot read properties of undefined reading ('name')

// Therefore optional chaining is used *
console.log(obj2?.age); // if the object is defined then read its property or else give undefined