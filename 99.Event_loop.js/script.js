// -- Event Loop

//* Website For Pratical :- http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');
    }, 2000);
}); // the interpreter will throw this in web api / because it is an eventlistener
// if the button is clicked the web api will throw the function to callback queue
// order 4 Because only will execute after button is clicked

console.log("Hi!"); // this will execute normally
// Order 1

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000); // this will run in call stack and after seeing the setTimeout this will thrown to web api until timer is done
// Order 3 because after 5 seconds

console.log("Welcome to loupe."); // this will execute normally
// Order 2