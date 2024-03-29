//A fragment of code that produces a value is called an expression. Every value written literally is an expression      
//For Ex: 
77
"Aditya"
console.log(14)
let a = 4
let b =3
// console.log("The value of a + b =", a+b) // Expression for addition between number
// console.log("The value of a - b =", a-b)// Expression for substraction between number
// console.log("The value of a / b =", a/b) // Expression for dividation between number
// console.log("The value of a * b =", a*b) // Expression for multiplication between number
// console.log("The value of a^b =", a**b) // Expression for the a raise to the b
// console.log("The value of a%b =", a%b) // Expression for dividation between number and output the result
// console.log("The value of a / b =", a/b) // Expression for dividation between number

// Increment operator and decrement operator
console.log("The value of a with increment after printing", a++)
console.log("The value of a with increment before printing",++a)
console.log("The value of a with decrement after printing", a--)
console.log("The value of a with decrement before printing", --a)
console.log("The value of a ", a)
console.log(a)

//Assignment Operators
a=2; // Same as a = 2
console.log(a)
a+=4 // Same as a = a+4
console.log(a)
a-=3 // Same as a = a-3
console.log(a)
a*=3 // Same as a = a*3
console.log(a)
a/=3 // Same as a = a/3
console.log(a)
a%=3 // Same as a = a%3
console.log(a)
a=7
a/=3 // Same as a = a/3
console.log(Math.floor(a))

//Comparison operators (The operators only only outputs the true and false)
let i = 6
let j = "6 "
console.log(i==j) // To check if the value is same
console.log(i!=j) // To check if value is not same 
console.log(i===j) // To check if value and its Data type is same
console.log(i!==j) // To check the value and its Data type is not same

//Logical Operators
let x = 5
let y = 6
console.log(x<y && x==5); //&& works as and means both condition should be true
//Truth Table 
// true && true = true;
// true && false = false
// false && true = false
// false && false = false

console.log(x>y || x==5) // || Works as or means any one condition is true it result as true

console.log(!false); // ! is a not operator which means if condition is true it will not run