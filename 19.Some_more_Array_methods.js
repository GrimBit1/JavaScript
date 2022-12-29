// Delete function 
let d = [3,51,22,41,262,38]
console.log(d);
delete d[0] // This will delete the first element from the array but space will be there 
console.log(d,d[0]);

//Concat function to join two or more array 
let d1 = [3,4,5,6,3,6]
let d2 = [3,6,3,7,5]
let a = d.concat(d1,d2)
console.log(a) 

// Sort function
// sort function sort the array alphabetically so 1,12,2 like this 
a.sort()
console.log(d);
//compare function for sort to sort by ascending order
let compare1= (a,b)=>{
  return a-b
}
a.sort(compare1)
console.log(a)


// Reverse function reverse the array 
a.reverse()
console.log(a)

// Splice function 
let c =[1,2,3,4,5,6,7,8,9]
c.splice(2, 4 , 102)
// 2 means starting from index no 2 4 means element to remove the 4 elements and 102 to replace the remove number 
console.log(c)