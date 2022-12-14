// Problem no 1
console.log("adi\"".length)

/*
// Problem no 2
// includes() function returns true or false
let a = "Aditya is a good boy"
let b = 'boy'
let b1 = ""
let c = a.includes(b)
let d = false

console.log(c)
console.log(Boolean(b1))
console.log(`The word ${b} ${ d ? "is" : "isnt"  } in the sentence`) */

// Problem no 3
let a = "Aditya"

a = a.toLowerCase()
console.log(a)

let capsDown = (a) =>{
    a = a.toLowerCase()
    console.log(a)

}
capsDown("Hi");

// Problem no 4
let b = "Please give me Rs 1000"
console.log(b.slice("Please give me Rs ".length))

// Problem no 5
let c = "Aditya"
c[4] = "a " // This will not work but not gives error