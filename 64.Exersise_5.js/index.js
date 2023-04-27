let ipDiv = document.getElementsByClassName('ip')[0]
let messageDiv = document.getElementById('message')
let ip;
const ipAddress = async ()=>{
   ip = await fetch('https://icanhazip.com/').then((value)=>value.text())
    // return ip
}
ipAddress()

const hackerMan = async () =>{
    messageDiv.innerHTML  = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initalizing Hack Program...")
        }, 1000);
    })
    messageDiv.innerHTML  = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hacking Tushar's Username...")
        }, 2000);
    })
    messageDiv.innerHTML  = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Username found 7u5har...")
        }, 3000);
    })
    messageDiv.innerHTML  = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Got Ip Address ${ip} `)
        }, 4000);
    })
}

hackerMan()

// ipAddress()