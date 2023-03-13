console.log("Hi");
let res;
let promise = new Promise((resolve, reject) => {
  console.log("Hi 2");
  res = resolve(56);
});

console.log(promise);
console.log(res);
// Kuch Samajh nahi aya 🥲