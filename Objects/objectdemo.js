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
console.log("***********************************************");


/**-----------------------------------------------------------------------------------
 * NO COLON for existing variables:
 * 
 * Assignment
Complete the createMessage function. It should return a new object with properties:

phoneNumber: The given phoneNumber parameter
message: The given message parameter
messageLength: The length of the message parameter
 */
function createMessage(phoneNumber, message) {
  // ?
  let newwMessage ={
    phoneNumber:phoneNumber,
    message:message,
    messageLength: message.length
  };
// if you want a key to have the same name as an existing variable 
//  (here phoneNumber,message are variables in parameter i.e. preExisting),
// you can omit the colon and the value.
  let newwMessage2={
    phoneNumber,// same as phoneNumber : phoneNumber
    message,//same as message : message
    messageLength: message.length
  };
console.log("newMessage2: ",newwMessage2);

  return newwMessage;

}

console.log("newMessage: ",createMessage(213212,"Hi Baby!"));
console.log("***********************************************");

/**---------------------------------------------------------------------
 * Adding and updating keys
 */
let car ={
  company:"Land Rover",
  name:"Range Rover",
  model:2024
};
console.log(car);
car.average=20;// adding new property
car.model=2025;//updating property
console.log(car);
console.log("***********************************************");
/**---------------------------------------------------------------------
 * Assignment
In Textio, users create text campaigns to send messages to their contacts. Each campaign needs a unique ID for tracking and management.
Complete the addID function. It takes a campaignRecord object as input and returns it with a newly generated id property added:

campaignName-senderName
 */
function addID(campaignRecord) {
  let max = 200, min =100;
  campaignRecord.id=Math.floor(Math.random()*(max-min+1))+min;// adds new property to obj
  return campaignRecord;
}
// don't touch below this line
let record101={
  campaignName:"Manmade Society",
  senderName :"Alen"
} 
console.log(record101);
console.log(addID(record101));