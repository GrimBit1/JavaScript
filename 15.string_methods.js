let name = "Aditya"
console.log(name.length); // Gives the no of string character

console.log(name.toUpperCase());
// U got it by name but that's a function not property 
console.log(name.toLowerCase())

console.log(name.slice(2,4))
//This will print 2,3 but not 4
// Starts from 2 to 4

// one more method to slice the string
console.log(name.slice(2))// It will slice from 2 to end

name ="Aditya"
// method to replace character in strings
console.log(name.replace("a","i")) // (But only first it founds in the string)

// Concat function it will join two or more strings in a string 
let friend = "Shiv"
console.log(name.concat(" , Hi This is my friend ", friend));
name = "  Aditya  "
//Trim function to trim string to trim whitespace 
console.log(name.trim());

// Index of function gives index of that string
let fr = "Kahna"
fr= fr.concat("Aditya")
console.log(fr)


for (i=0;i <= fr.length; i++){
  console.log(fr[i]);
  }