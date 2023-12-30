// Prototype Method

let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(animal.jumps);


// Class Method

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Constructor " + this.name);
    }

    eats() {
        console.log("Khaa raha hun");
    }

    jumps() {
        console.log("Kood raha hun");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name); // Parent class
        this.name = name;
        console.log("The name of Lion is " + this.name);
    }

    // Method Overriding
    eats() {
        super.eats();
        console.log("Khaa raha hun rooaaarrrrrrrrr");
    }
}

let a = new Animal("Bunny");

let l = new Lion("Shera");

a.eats();
l.eats();

console.log(`Yes ${l instanceof Animal}`); // Yes True

console.log(`No ${a instanceof Lion}`); // No False


// Getter and Setter Method

class User{
    constructor(name){
        // Invokes setter
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 4) {
            console.log(`The name is too short`);
        }
        this._name = value;
    }
}

let user = new User("John"); 

console.log(user.name);  // John

let user2 = new User("Ali");  // The name is too short
