console.log("hi");
let container = document.getElementsByClassName("container")[0]
console.log(container)

let div = document.createElement("div");
div.innerHTML = "<h1>Hello! World</h1>";
console.log(div);

container.append(div); // Append put the element in the last

container.prepend(div); // Append put the element in the first

container.after(div); // put after the container

container.before(div); // put before the container

container.replaceWith(div); // Repalce the container 