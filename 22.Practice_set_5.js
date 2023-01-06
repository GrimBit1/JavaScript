//Question no 1
let a = [5,6,1,2,3]
let b = parseInt(prompt("Hi please enter the element"))
a.push(b)
console.log(a);

//Question no 2
let c = 0
do {
  c = parseInt(prompt("Hi please enter the element"))
a.push(c)
console.log(a);
} while (c!=0);

// Question no 3
let arr = [2,10,20,30,58,60]
let arr2 = arr.filter((item) => {
  return item%10==0
});
console.log(arr2);

//Question no 4
console.log(arr.map((i) => {
  return i*i
}))

// Question no 5
let array = []
let n = parseInt(prompt("Enter the number u want to find factorial"))
i = 1
while (i<=n){
  array.push(i)
  i++
}
console.log(array)
let array2 = array.reduce((a,b)=>{
  return a*b
})
console.log(`${array2}`);