console.log("Hi");
let todoDiv = document.getElementsByClassName('todo')[0]
let todoArr = []
for (let i = 0; i < localStorage.length; i++) {
    todoDiv.innerHTML += `<div class="card">${localStorage.getItem(i)}</div>`;
}
const onButton = () => {
    let todo = prompt('Enter what you want to do')
    if (typeof todo == `string`) {
        localStorage.setItem(localStorage.length, todo)
        todoDiv.innerHTML += `<div class="card">${localStorage.getItem(localStorage.length - 1)}</div>`
        todoArr.push(todo)
    }
}

const onResetButton = () => {
    if(confirm('You Want to delete all')){
        localStorage.clear()
    }
    todoDiv.innerHTML =``
}