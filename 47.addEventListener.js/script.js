console.log("hi")
let btn = document.getElementById("btn")
let ask = prompt('Do you want animation')
let btn_bgChange = ()=>{
    btn.style.backgroundColor = 'white'
}

btn.addEventListener('click',btn_bgChange)  // Event listener runs the function on the event

if(ask == 'no'){
    btn.removeEventListener('click',btn_bgChange)
    // btn.removeEventListener('click',()=>{ This will not work because we have to give the reference of function to the event listener
    //     if(ask = 'no')
    //     btn.style.backgroundColor = 'white'
    // })
}





// Experiments

btn.onmousemove = () =>{
    btn.style.backgroundColor = 'black'
    btn.style.transform = 'scale(1.5)'
    console.log("Hovered")
}
btn.onmouseleave = () =>{
    btn.style.backgroundColor = ''
    btn.style.transform = ''

    console.log("Left")
}
let line = document.getElementById('line')
let click  = 0
line.onclick = ( ) =>{
    line.style.transform = 'rotate(-45deg)'
    line.style.backgroundColor = 'blue'

    click++
    console.log(click)
    if (click%2==0){
    line.style.transform = ''
    line.style.backgroundColor = ''
    }
}