let obj = {
    name: "Aditya",
    language: "JavaScript",
    run: () => {
        alert("Self run"); //* if the object has its own property then it will not inherit it from another
    },
};
//*-- Prototype is used inherit the properties from other object

let p = {
    run: () => {
        alert("Run");
    },
};

obj.__proto__ = p; //* The p method is sharing to obj

// we can chain the prototypes
// like
let temp = {
    name2: "Harry",
};
p.__proto__ = temp;

obj.run();
