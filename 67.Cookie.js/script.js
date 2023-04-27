console.log("Hi");

// Cookie
// cookie is saved in browser as form of string

//* document.cookie = "User = Aditya"; // This operation doesn't clear previous cookie but add another string
// This is like key value pair

console.log(document.cookie);

// if i want to update the cookie then
// document.cookie = "User = GrimBit1"
// let key = prompt('Enter the key')
// let value = prompt('Enter the value')
// document.cookie = `${key}=${value}` // the cookie are separated by ;
// therefore if semicolon is added in the cookie then it corrupts
// therfore
document.cookie =`${encodeURIComponent(key)}=${encodeURIComponent(value)}`

// syntax of cookie
// document.cookie = `user = Aditya ; path = /a ; expires =  `

// After the semicolon all are considered as options like path which means the cookie will be visible to the path and expires means the temporary cookie