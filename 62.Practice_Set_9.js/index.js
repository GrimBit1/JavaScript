console.log("Hi");
// Problem no 2

// const loadScript = async (src) => {
//     let promise = new Promise((resolve, reject) => {
//         let script = document.createElement('script')
//         script.src = src
//         document.body.append(script)
//         script.onload = ()=>{
//             resolve("Script Loaded")
//         }
//     })
//     return promise
// }

// const main2 = async () =>{
//     console.log(new Date().getMilliseconds())
//     let message = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//     console.log(new Date().getMilliseconds())
//     console.log(message)
// }
// main2()

// Problem 3

// const reject = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This is a Error"));
//         }, 3000);
//     });
// };

// const err_handle = async () => {
//     try {
//         let message = await reject();
//     } catch (error) {
//         console.log("Error handled")
//     }
// };
// err_handle();

// Pronlem no 4

const allPromise = async () =>{
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("After 1 second")
        }, 1000);
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("After 2 second")
        },2000);
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("After 3 second")
        },3000);
    })

    let Promise_all = Promise.all([p1,p2,p3])
    let message = await Promise_all // 
    console.log(message)
}
allPromise()