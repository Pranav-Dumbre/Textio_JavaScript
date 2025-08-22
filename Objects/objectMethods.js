const person = {
  firstName: "Pranav",
  lastName: "Dumbre",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName());//Pranav Dumbre

/**
 * Complete the getRemainingMessages() method in the campaign object. 
 * The method should calculate and return the number of remaining messages a 
 * user can send in the campaign. The calculation is based on the following formula:
remainingMessages = maxMessages - sentMessages
 */
const campaign = {
  getRemainingMessages() {
    let remainingMessages = this.maxMessages-this.sentMessages;
    return remainingMessages;
  },
  maxMessages: 100,
  sentMessages: 30,
  name: "Welcome Campaign",
};

console.log(campaign.getRemainingMessages());

/**
 * Assignment
Complete the sendMessage() method on the campaign object.
For now, it should simply increment the campaign's sentMessages counter by 1.
 */
const campaignWelcome = { 
    //the const keyword doesn't stop you from changing the properties of an object
    //stops you from reassigning the variable to a new object
    //Do not trust const objects to have constant contents!
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage() {
    this.sentMessages++;
},
};

console.log(campaignWelcome.sentMessages);
campaignWelcome.sendMessage();
console.log(campaignWelcome.sentMessages);
