console.log("HI")

// alert("Hi enter ht eejerf") // Alert alerts in the browser

// let a = prompt("Hi give a")// Asks input from user and stored in variable as string
// console.time("Hi")


// console.timeEnd("Hi")
// console.log(a)

// let b = confirm("do you want to write in document") // confirm returns boolean value as true or false
// if (b){
//     document.write("<div style=\"background-color: aqua;\"> Hi</div>") // Document.write write in the html
// }
let changecss = () =>{
    document.getElementsByTagName('link')[1].href = 'style2.css'
}
let changecss2 = () =>{
    document.getElementsByTagName('link')[1].href = 'style.css'
}
let click = 0
let clicked = () =>{
    click++;
    if (click%2==1){
        changecss()
    }
    
    else if (click%2==0){
        changecss2()
    }
    else{
        
    }
    console.log(click)

}    