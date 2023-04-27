//* Map array method is like forEach but creates new array with new element
//  let arr = [23,31,14,15]
//  console.log(arr)
//  let a = arr.map((a,b,c)=>{
//     console.log(a,b,c)
//     return a**2
//  })
//  console.log(a)

// // Filter method fillter the array 
// let smal = (a)=>{
//     return a<5
// }
// let arr2 = [1,2,3,4,5,6,7,8,9,10]
// let a2 = arr2.filter(smal)
// console.log(a2)

// Reduce array method returns a value
let c = [1,2,3,4,5,6]
let c2 = c.reduce((a,b)=>{
    return a*b
})
console.log(c2)