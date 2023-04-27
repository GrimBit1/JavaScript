let message = "Good Global";
console.log(message);
function hello1() {
    let message = "Good morning";
    console.log("Hello1 " + message);
    {
        let message = "Good Afternoon";
        console.log("Hello2 " + message);
    }
    console.log(message);
    let c = function () {
        console.log("Hello3 " + message); // the message get deleted after the function but if im returning something to other environment then it takes all the reference of variable return in the function // Also called as lexical scoping
    };
    return c;
}
let c = hello1();
c();
