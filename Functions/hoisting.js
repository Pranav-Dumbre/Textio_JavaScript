/**
 JavaScript Hoisting refers to the process whereby the interpreter 
 appears to move the declaration of functions, variables, classes, or imports 
 to the top of their scope, prior to execution of the code.

 In Python, a function must be defined before it's used.
 But that's not so in JavaScript! As long as a function is defined somewhere
 in the file
 */

console.log(getGrade(88));

function getGrade(marks){
    if(marks>=80)return 'A';
    if(marks<80)return 'B';
}
