//-- Immediately invoked function expression
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi");
    }, 4000);
  });
};
//* Traditional method to check the output
// let f = async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// };
// f();

//-- IIFE
(async () => {
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})()
