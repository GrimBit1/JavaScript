console.log("hi")
// let dateDiv = document.getElementById('date')
let hourDiv = document.getElementById('hour')
let minuteDiv = document.getElementById('minute')
let secondDiv = document.getElementById('second')
setInterval(() => {
    let date = new Date()
    // dateDiv.innerText = date 
    hourDiv.innerHTML = `<span>${date.getHours()}<span/>`
    minuteDiv.innerHTML = `<span>${date.getMinutes()}<span/>`
    secondDiv.innerHTML = `<span>${date.getSeconds()}<span/>`
}, 1000);