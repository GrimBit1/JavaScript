// const { response } = require("express");

console.log("Hi");

let fetchData = fetch("https://dog-api.kinduff.com/api/facts");

fetchData
  .then((value) => {
    console.log(value);
    console.log(value.status);
    console.log(value.ok);
    console.log(value.headers);

    return value.json();
  })
  .then((response) => {
    console.log(response);
  });
  
  

// Fetch Api Syntax
/* fetch('url',{  // first parmeter is url
    headers:{     // second parameter is object for request headers
         Authentication : ''
        }
 })*/


 
// let dogData;
// let factsDiv = document.getElementsByClassName('facts')[0]
// // Fetch api
// let a = fetch("https://dog-api.kinduff.com/api/facts" /* ,()=>{} */); // Fetch Api Syntax

// const fetchValue = async () => {
//     dogData = await a.then((value) => value.json()); // After .json() resolves , we can access data
//     console.log(dogData.facts[0])
//     factsDiv.innerHTML = dogData.facts[0]
// }
// fetchValue()
