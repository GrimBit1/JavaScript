console.log("Hi");
class Employee {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
    login() {
        console.log(`The Employee has logged in`);
    }
    logout() {
        console.log(`The Employee has logged out`);
    }
    requestLeaves(leaves) {
        console.log(`The Employee has requested ${leaves} - Auto approve `);
    }
}
class Programmer extends Employee {
    //-- Constructor Overiding
    //* We didn't pass any constructor in this class then it will take from previous class
    //* JS automatically adds this
    // constructor(...args){
    //     super(...args)
    // }
    constructor(name) {
        super(name)
        console.log(`Programmer's constructor here`);
        this.role = this.constructor.name // this should be called after super
    }

    askCoffee() {
        console.log("The Employee has requested coffee");
    }

    requestLeaves(leaves) {
        super.requestLeaves(leaves + 1); // so this will request leaves from employee
        console.log("One Extra from the Company");
    }
}
let Aditya = new Programmer("Aditya", 18);
