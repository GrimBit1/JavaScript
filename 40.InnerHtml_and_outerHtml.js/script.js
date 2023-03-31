//* Experiment
// console.log("hi")
// let title1 = document.title
// console.dir(title1)
// window.addEventListener("blur",()=>{
//     document.title = 'You gone Why?'
//     console.log("HI --")
// })
// window.addEventListener("focus",()=>{
//     document.title = title1
//     console.log("HI --")
// })

// Console.dir gives elemnt as an object
console.dir(document.getElementsByTagName("div")[0])

// innerHTML and outerHTML is only valid for element node not for text node and comment node
console.log(jj.innerHTML)
console.log(jj.outerHTML)

// data and node value
console.log(document.body.firstChild.nodeValue)

// if i only need text content of the website
console.log(document.body.textContent)