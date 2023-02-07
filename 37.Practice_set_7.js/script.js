let navbar = document.querySelector(".navbar")
console.log(navbar)
setTimeout(() => {
    console.log(navbar.firstElementChild.firstElementChild.style.color = 'red')
}, 2000)    