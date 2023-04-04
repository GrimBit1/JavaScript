console.log("Hi");
class Employee {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    login() {
        console.log(`The Employee has logged in`);
    }
    logout() {
        console.log(`The Employee has logged out`);
    }
    requestLeaves(leaves) {
        console.log(`The Employee has requested ${leaves} - Auto approve `); //If we want to overide this method in another class then
    } // But if we change this , it doesnt apply to programmer class because of  this we use super keyword

}
class Programmer extends Employee {
    askCoffee() {
        console.log("The Employee has requested coffee");
    }
    //-- Method Overiding
    // requestLeaves(leaves) {
    //     console.log(`The Employee has requested ${leaves+1} (One Extra from the Company)`); // we do this 
    // }

    //--Super Keyword
    requestLeaves(leaves) {
        super.requestLeaves(leaves + 1) // so this will request leaves from employee
        console.log("One Extra from the Company");
    }
}
let Aditya = new Programmer('Aditya', 18)