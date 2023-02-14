console.log("hi")

let a = document.getElementsByClassName('container')[0]
console.log(a)

// we can also write on click attribute directly in javascript
a.onclick = () => {
    console.log('container ke anddar click kiya')
}
a.onmouseenter = () =>{
    console.log('container ke anddar gaya')
}