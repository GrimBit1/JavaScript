// -- Class and Object
class RailwayForm { // Class is used as template for making objects
    submit() {
        alert(`${this.name}: Your Form is Submitted for Tranino:${this.trainno}`)
    }
    cancel() {
        alert(`${this.name}: Your Form is Cancelled for Tranino:${this.trainno}`)
    }
    fill(name, trainno) {
        this.name = name
        this.trainno = trainno
    }
}
let harry = new RailwayForm()
harry.fill('Harry',12323)
harry.submit()
let aditya = new RailwayForm()
aditya.fill('Aditya',121232)