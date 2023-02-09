console.log("hi");
let hi = document.getElementById("hi");
console.log(hi);
// Get Attribute is used to get the value of the attribute
console.log(hi.getAttribute("class"));

// has Attribute gives true or false if it has that attribute
console.log(hi.hasAttribute("class"));
console.log(hi.hasAttribute("style"));

// Set attribute set the attribute of the element
hi.setAttribute("hidden", "true");

// Remove attributes removes the attribute of the element
setTimeout(() => {
  hi.removeAttribute("hidden");
}, 1000);
