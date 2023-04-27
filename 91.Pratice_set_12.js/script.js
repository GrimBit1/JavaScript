//--Problem no 1
// let a = (text) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 2000);
//   });
// };
// (async () => {
//   let b = await a("Hello");
//   console.log(b);
//   b = await a("World");
//   console.log(b);
// })();

//--Problem no 2
// function average(...array) {
//   console.log(array);
//   let sum = 0;
//   for (const i of array) {
//     sum += i;
//   }
//   let averge = sum / array.length;
//   return averge;
// }
// console.log(average(1,2,3,4,5,6))

//--Problem no 3
// let afterSometime = (n) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, n);
//   });
// };
// (async () => {
//   let b = await afterSometime(2500);
//   console.log(b);
// })();

//--Problem no 4
let simpleInterest = (p, r, n) => {
  let si = (p * r * n) / 100;
  return si;
};
console.log(simpleInterest(100, 10, 1));
 