console.log("Hi");
class Animal {
    constructor(name,color){
        this.name = name
        this.color = color
    }
    shout(){
        console.log(`${this.name} is shouting`);
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

//-- Now if we want to extend this class // or we have to create a new class from animal

class Monkey extends Animal{ //* now we got all the methods from animal and also added some custom for new class
    eatBanana(){
        console.log(`${this.name} is eating Banana`);
    }
}

let Chimpu = new Monkey('Chimpu','brown')
Chimpu.eatBanana()
Chimpu.eat()