// -- Maps are just like objects or array but they remember the order they were inserted
// * To intialise
let map = new Map()
map.set('name','aditya')
console.log(map);
map.set('age',18)
map.set('rollno',19)
console.log(map);
console.log(map.has('age'))