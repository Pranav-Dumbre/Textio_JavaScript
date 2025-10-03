//static method is bound to class not to an object i.e. instance of the class
class User {
  static numUsers = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.numUsers++;
  }

  static getNumUsers() {
    return User.numUsers;
  }
}

const lane = new User("Lane", 30);
console.log(User.getNumUsers()); // 1
const allan = new User("Allan", 30);
console.log(User.getNumUsers()); // 2

// This doesn't work because its not a method on the object
//console.log(lane.getNumUsers());
// TypeError: lane.getNumUsers is not a function
//    at main.js:20:18

class Messege {
    static totalMesseges=0; 
    static totalMessegeLength=0;
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Messege.totalMesseges++; // static vars are accesed using classname
    Messege.totalMessegeLength+=this.body.length;
  }

  static getAvgMsgLen(){
    return Messege.totalMessegeLength/Messege.totalMesseges; 
 }
}

let msg1=new Messege("user1","user2","Heyy buddy!");
let msg2=new Messege("user2","user1","Hii");
console.log(Messege.getAvgMsgLen());
