// Matches 
let id1 = document.getElementById("id1")
console.log(id1)

console.log(id1.matches("#id1")) //return true and false if the css selector matches
console.log(id1.matches(".box"))

// Javascript is so smart if i just use the name of variable as id given to element it will return the element
console.log(id2)

// Closest just gives the element if his parent has that the css selector
console.log(id1.closest('.hi'))

// Contains return 
let body = document.getElementById("body")
let hi = document.getElementById("hi")
console.log(body)
console.log(body.contains(hi)) // this will only give return any if output that is already declared in a variable 