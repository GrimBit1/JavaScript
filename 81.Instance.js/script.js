//-- Getter and setter
//* Getter and setter are used to for simple syntax,securind the data and doingchanges in function behind the scenes-

class Animal {
    constructor(name) {
        this.name = name
    }
    fly() {
        console.log("mai udd raha hu");
    }
    get objname() {
        return this.name
    }
    set objname(name) {
        return this.name = name
    }
}
let Aditya = new Animal('Aditya')
Aditya.fly()

// Aditya.name = 'Sanay'
// console.log(Aditya.name)
// console.log(Aditya)
// console.log(Aditya.objname)
// Aditya.objname = "Sanay" // Seting the name in the object
// console.log(Aditya.objname) // returning the object name

//-- Instance of

console.log(Aditya instanceof Animal); // this returns true or false based on if the object is created from that class or from class inherited from that class
