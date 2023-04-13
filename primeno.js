const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Enter the range you want to check: "));
let a = 2;
for (i = a; i <= num; i++) {
  let isprime = "is prime";
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isprime = "is not prime";
      break;
    }
  }
  if (isprime == "is prime") {
    console.log(`${i} ${isprime} number`);
  }
}
