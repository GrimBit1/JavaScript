console.log("hi")

let first = document.getElementById("first")
console.log(first.classList) // .classlist gives the list of class

// first.className="back-black" //returns the class attribute and manipulate it

// first.classList.add('back-black')// Adds the class

// first.classList.remove('back-black')// Remove the class

first.classList.toggle('back-black') // toggle do the opposite if class is there then remove it and vice versa

console.log(first.classList.contains("back-black")) // This returns true or false according to condition