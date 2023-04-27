// //*Problem no1

// class Complex {
//   constructor(a, b) {
//     this.real = a;
//     this.imaginary = b;
//   }
// //*Problem no2

//   add(num) {
//     this.real += num.real;
//     this.imaginary += num.imaginary;
//   }
// }
// let a = new Complex(2,4); // Created the complex from class
// let b = new Complex(6,5); // Created the complex from class
// a.add(b)
// console.log(a);

//*Problem no3
class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    study(){
        console.log("Im not studying my choice");
    }
}
class Student extends Human{
    study(){
        console.log(`${this.name} is studying`);
    }
}
let Aditya = new Student('Aditya',18)
Aditya.study()

//*Problem no4
console.log(Student instanceof Human);