// "use strict";
// console.log("hi")

// // Searching the dom by class name
// let a = document.getElementsByClassName("card-title")
// console.log(a)

// // Searching the dom with selector name
// let b = document.querySelectorAll(".car-title") // This gives card-title collection means all
// console.log(b)
// let c = document.querySelector(".card-title") // This will give first element and it is optimised than index[0]

// // Searching the dom by tag name
// // let d = document.getElementsByTagName("div")[0].style
// // console.log(d)
// // d.display ='none'
// e= 2;
// var e
// console.log(this)

let obj = {
    a: 'a',
    b : this
}
console.log(obj.b)
// console.time("hi")
let a = ()=>{
    console.log("hi after 2 sec")
    // console.timeEnd("hi")
}
setTimeout(a,2000)