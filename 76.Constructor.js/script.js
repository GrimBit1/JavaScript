// -- Class and Object
class RailwayForm {

    //* Class is used as template for making objects
    //  A JavaScript class is not an object.
    //  It is a template for JavaScript objects.
    
    constructor(name, trainno) {

        //* Constructor always run when creating new object from class and takes parameter from class
        console.log("Hi Constructor called");

        this.name = name;

        this.trainno = trainno;

    }
    submit() {

        alert(`${this.name}: Your Form is Submitted for Tranino:${this.trainno}`);

    }
    cancel() {

        alert(`${this.name}: Your Form is Cancelled for Tranino:${this.trainno}`);

    }
}
let harry = new RailwayForm("Harry", 12323);

harry.submit();

let aditya = new RailwayForm("Aditya", 121232);

