// Arrays is a collection of items
let a = [19 , 20 , 2 , true ,"Hi"] // The array is defined between square brackets 

// Array can store any type of data 

// a[2] is used to access the value of array in 2nd index
console.log(a[2]) 

// Length of the array
console.log(a.length)

// Changing the value in array 
a[1] = 2
console.log(a)
//Also i can add the extra items
a[5] = 801
console.log(a)

// Array is also an object
console.log(typeof a)
for(let i = 0;i<a.length;i++){
    console.log(a[i])
}