let a = [1, 3, 54, 5, 3, 2]
// toString function 
let a1 = a.toString()
console.log(a1)

//This will make aray to string and join all the element with "-"
let b = a.join("-")
console.log(b)

// Pop function
let c = a.pop() // This will modify original array //This will pop the last element and returns the last element
console.log(c)
console.log(a)

//Push function
let c1 = a.push(54) // This will modify original array and returns array length
console.log(a, c1)

// Shift function (opposite of pop function)
let b1 = a.shift()
console.log(a,b1) //This will modify original array and returns first element

// Unshift function (opposite of push function )
let c2 = a.unshift(56) // This will add new element in beginning and returns new array length
console.log(a,c2)

// Delete function 
let d = a.dele
