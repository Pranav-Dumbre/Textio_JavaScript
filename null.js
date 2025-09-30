// undeclared vs undefined vs null
//1.undeclared - we havent created a varible , not even a name
//console.log(x);//referenceError : x is not defined

//2.undefined - variable is declared but it doesnt have value
//value doesnt exists at all
let bufferCount;
console.log(bufferCount);//undefined

//3.null - value exists but its empty
//needs to be explicitly assign a value to null unlike undefined
let username= null;
console.log(username);//null
console.log(typeof username);//object


