//Classes in JavaScript are a template for creating objects.
/**
 * introduced in ECMAScript 2015 (ES6)
 */
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`Car Info: ${this.brand} ${this.model} (${this.year})`);
    }
}

class Message {
        constructor(recipient,sender,body){
            this.recipient=recipient;
            this.sender=sender;
            this.body=body;
        }
}
// object creation
var newMessage= new Message("Joe","Megan","Hey, Joe !");
var newCar= new Car("Range Rover","Defender",2025);
newCar.displayInfo();

// inheritance
class Lambo extends Car{ //inheritance
    constructor(model,year,price){
        super("Lambo",model,year);
        this.price=price;
    }
    showInfo(){
        console.log(`brand:${this.brand}, Model:${this.model}, Year :(${this.year}), Price:${this.price} `);
    }
}

var urus = new Lambo("Urus",2025,10000000);
urus.showInfo(); // method call

//Getter Setter
class User{
    constructor(name){
        this._name=name;
}
get name(){
    return this._name;
}
set name(newName){
    this._name
    =newName;
}
}

const user = new User("Pranav");
console.log(user.name);
user.name="Ved";
console.log(user.name);

