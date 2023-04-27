console.log("hi")

let options = {
    method: 'POST',
    headers: {
        "Content-type": 'application/json'
    },
    body: JSON.stringify({
        title: 'Aditya',
        body: 'Boy',
        userId: 1,
    })
}

const fetchPost = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let data = await response.json()
    return data
}

const main1 = async () =>{
    let answer = await fetchPost()
    console.log(answer)
}
main1()
// let postReq = fetch('/',options)