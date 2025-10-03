
//By default, all properties of a class are public

/**
 * Encapsulation in JavaScript is typically enforced at two levels:

The class level: Public/private methods using # for private fields
The module level: Exporting only what you want to be public (we'll talk about modules later)
 */
class Movie{
    #name; // private variable
    constructor(name,rating){
        this.#name=name;
        this.rating=rating;
    }
    display(){
    console.log(`title:${this.#name} , rating:${this.rating}`);//Private properties can still be used from within the class
    }
}

let thor = new Movie("Thor",9.3);
// console.log(thor.#name); //SyntaxError: Private field '#name' must be declared in an enclosing class

console.log(thor.rating);// 9.3

thor.display();
thor.name="Ironman"; // wont change 
thor.rating=9.0; // will change
thor.display();

/**
 * Textio messages have a createdAt field that stores the date the message was created. 
 * In order to avoid accidentally altering the creation date, change the createdAt field from a public field to a private field.
 */
class Message {
    #createdAt;
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    this.createdAt = new Date();
  }
}

// don't touch below this line

const messsage = new Message("555-1234", "555-5678", "Hi there!");

console.log("Attempting to access the property createdAt...");
console.log("createdAt: " + messsage.createdAt);

const messageClass = Message.toString();
console.log("has private createdAt: " + messageClass.includes("#createdAt"));
