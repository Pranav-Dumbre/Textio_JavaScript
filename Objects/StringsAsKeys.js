
//what if the key is dynamic? Like, 
// what if the user enters a string and you need to use that as the lookup key?
const desk = {
  wood: "maple",
  width: 100,
};

console.log(desk.wood);
// prints "maple"

console.log(desk["wood"]);
// also prints "maple"

const key = "wood"; //consider this can we get from user 
console.log(desk[key]);// we look for the key in object
// also prints "maple"

/**
 * Assignment
Complete the getProviderCount function. It takes two parameters:

provider (string): The name of the cellular provider (e.g., 'Verizon', 'AT&T').
counts (object): An object where each key is a provider name, and the value is the number of phone numbers associated with that provider.
The function should return the count of phone numbers for the given provider. If the provider doesn’t exist in the counts object, return 0.
 */
const Custcounts = {
    airtel:1022030,
    vi:432352,
    jio:113243
};
function getProviderCount(provider, counts) {
  if(counts[provider]){
  return  counts[provider];
  }else return 0;
}
console.log(getProviderCount("vi",Custcounts));
console.log(getProviderCount("jio",Custcounts));
console.log(getProviderCount("vodafone",Custcounts));