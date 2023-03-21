console.log("Hi");
const f = () => {
    try {

        let a = 0;

        console.log(program); // if we get error in try then interpreter goes to catch

        console.log("Program ran successfully");

        return

    } catch (error) {

        console.log("This is an error");

        // console.log(p); // if catch gives error then still the finally will run

    } finally {

        console.log("The finally is running"); // even if we return the fuction it will still run just before the return

    }
}
f()
console.log("After the try catch");

