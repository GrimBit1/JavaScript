//-- Arrow function
//*  Arrow function are written as this
// Method 1
let sayHello = () => {
  console.log("Hello");
};
sayHello();
// Method 2
sayHello = () => console.log("Hello1");
sayHello();

// Method 3
sayHello = (name) => console.log("Hello " + name);
sayHello("Aditya");

//-- This        
let obj 