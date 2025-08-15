// scope is where your functions and vars are available in code.
//diff behaviour on diff env (browser or node.js)
/**
 * 4 levels of scope
 * 1.Global scope: 
 *      browser:global variables are properties of the window object
 *              window.myGlobalVar = 'hello world';
 *      Node.js:global variables are properties of the global object
 *              global.myGlobalVar = 'hello world';
 * 
 * 2.Module scope: ES modules (both in Node.js and modern browsers), variables declared at the top level of a module are scoped to that module. They are not added to the global scope.
 *                 In the browser, using <script type="module"> creates a module scope for that scipt.
 * 
 * 3.Function scope: variables declared with var are limited to that function
 * 
 * 4.Block scope:ES6 introduced block scope with the let and const keywords.
 *               A block is typically defined by curly braces {}, like in if statements, loops, and other blocks of code.
 */

/**
 * While reviewing the Textio messaging system, you’ve come across a bug involving scope issues!
 * The function getMessageStatus returns the "status" of a message based on 
 * its length. It uses a nested helper function, isValidLength, to check if the message 
 * has more than 0 characters.Fix getMessageStatus so that it uses the result of 
 * isValidLength to set the messageStatus.
 */
function getMessageStatus(message) {
  let messageStatus = "processing";

  function isValidLength(message) {
    let messageStatus = "invalid";

    if (message.length > 0) {
      messageStatus = "valid";
    }

    return messageStatus;
  }

  // don't touch above this line

  messageStatus=isValidLength(message);
  return messageStatus;
}

console.log(getMessageStatus(""));
console.log(getMessageStatus("Hello"));