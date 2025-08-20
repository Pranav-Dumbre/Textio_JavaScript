// primitive -> stack  - gives copy
// non-primitive  -> heap - gives reference
/**
 * objects are stored on heap
 * 
 */

const apple = { 
  name: "Apple",
  radius: 2,
  color: "red",
};

console.log(apple.name); // prints "Apple"
console.log(apple.radius); // prints "2"
console.log(apple.color); // prints "red"

const pear = apple;
pear.color = "green";
console.log(pear.color);//green 
console.log(apple.color);//green

/**
 * Assignment
Complete the createMessage function. It should return a new object with properties:

phoneNumber: The given phoneNumber parameter
message: The given message parameter
messageLength: The length of the message parameter
 */
function createMessage(phoneNumber, message) {
  // ?
  let newwMessage ={
    phoneNumber:"",
    message:"",
    messageLength:0
  };

  newwMessage.phoneNumber=phoneNumber;
  newwMessage.message=message;
  newwMessage.messageLength= message.length;

  return newwMessage;

}

console.log(createMessage(213212,"Hi Baby!"));