console.log("Hi");

try {
    
    if (true) throw "This is Custom Error"; // if there is only one line of code then we dont need {}
    


    // throw new Error('This is a error') // Normal Error
    // throw new ReferenceError('This is a error') // this throw reference error
} catch (error) {
    
    console.log(error);

    //     console.log(error.name)
    //     console.log(error.message)
    //     console.log(error.stack)
}
console.log("Hi outside the error");

