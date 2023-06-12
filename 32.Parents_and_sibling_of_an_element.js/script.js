console.log("hi")
console.log(document.body.childNodes)
// Dom collection is read only element 
// It automatically refreshes
temp.innerHTML = JSON.stringify(document.body.childNodes)
// I can access next sibling with this property
console.log(document.head.nextSibling)
