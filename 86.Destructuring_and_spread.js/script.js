//-- Destructuring and spread operator
let arr = [2, 3, 4];
// let a = arr[0] // now we dont use this

// let [a] = arr; // results the same
// but if we another variable for second value
// let [a,b] = arr;
// console.log(a);
// console.log(b);

// but if i want a to get 1 index value then
let [, a] = arr;
console.log(a);

//-- Spread Operator
// let arr1= [1,3,4,5,6]
// let obj = {...arr1}
// console.log(obj); // spread operator is to spread all the value which is iterable

let obj = { ...arr };
console.log({ ...arr, 0: 3 }); // this will not overide the existing value
