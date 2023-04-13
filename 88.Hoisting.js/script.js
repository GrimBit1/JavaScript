greet();
function greet() {
  console.log("Good Morning");
}

// var a; // the declaration becomes likes this (2)

console.log(a); // this will give undefined but the variable is declared so no error (3)

var a = 9; // Declartion is hoisted to top but intialization isn't (1)

console.log(a); // this will give 9 (4 )
