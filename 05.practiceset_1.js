// Q.1 Create a variable of type string and try to add a number to it?
let a = ("Hello world");
let b = 1;
let c =a+b
console.log(c)

// Q.2 Use type of operator to find datatype of the string in last question?
console.log(typeof c)

//Q.3 Create a const object in javascript . Can you change it to hold a number later?
const object = {
  name : "Aditya"
}
//object = 5; // This gives a error
//No

//Q.4  Try to add a new key to the const object in problem 3 . Were you able to do it?
object.key = "Aditya"
console.log(object)
// Yes

//  Q.5 Write a js program to creat a word-meaning dictionary of 5 word?
dic = {
  aditya : "Name",
  noun: 'pronoun',
  pata :'nahi'
}
console.log(dic)