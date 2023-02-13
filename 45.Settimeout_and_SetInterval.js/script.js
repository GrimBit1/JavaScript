// setTimeout(function,timedelay,argument of the function)

let b = setTimeout(()=>{ // Set Timeout runs at after some time in milliseconds
    alert("Hi im after 2 seconds")
    console.time("Hi")
},2000)
console.log(b) // b is timer id i can use it to cancel out the set timeout 


// setInterval(function,timedelay,argument of the function)
setInterval(()=>{ // Set interval runs at every interval with some time in milliseconds
    console.timeEnd("Hi")
},4000)
// setInterval((a,b,c)=>{ // Set interval runs at every interval with some time in milliseconds
//     console.log("Hi",a+b+c)
// },4000,2,3,3)
