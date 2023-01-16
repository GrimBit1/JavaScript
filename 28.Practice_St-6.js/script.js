// // Question 1-3
// console.log("Hi");
// let print = (a) => {
//   console.log(a);
// };
// print("Hi Aditya");
// print(2 + 2);
let ageask = () => {
  let age = parseInt(prompt("Enter your Age"));
  if (age < 18 &&  age > 0) {
    alert("You Can't Drive");
  } else if (age >= 18) {
    alert("You Can Drive");
  } else if (age < 0) {
    console.error("The is in negative");
  } else {
    
  }
};
ageask();
let a = confirm("Do you Want to see the Question again");
if (a) {
  ageask();
}

// Question 4
let changeurl =() =>{
    let a = parseInt(prompt("Enter A number"))
    if (a>4){
        location.href = "https://www.google.com"
    }
}
changeurl()

// Question 5
let changebg = () =>{
    let a = prompt("Enter the value of background you want")
    document.body.style.backgroundColor = a
}
changebg()