console.log("Hi");

//-- Static method are used to make a funtion only available in class
class Animal {
    constructor(name){
        this.name = name
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
   static capitalize(name){
        return name[0].toUpperCase()+name.slice(1) // static make the function use in class and available to any object made from it
    }
}
let monkey = new Animal('chimpu')
console.log(monkey);
monkey.walk()
// console.log(monkey.capitalize("name"))
console.log(Animal.capitalize("name")) // But we can use it outside the class