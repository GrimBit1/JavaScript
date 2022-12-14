const prompt = require("prompt-sync")({ sigint: true });

// Fibonacci series
let a = 0
let b = 1
let i = parseInt(prompt("Enter the limit of number"))
let i1 = 0
console.log(a)
console.log(b)
for (i1 = 0; i1 <= i; i1++) {
    sum = a + b
    console.log(sum)
    a = b
    b = sum
}