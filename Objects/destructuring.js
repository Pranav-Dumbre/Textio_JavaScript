//unpack object properties easily
const system={
    os:"Windows",
    version:"10",
    license:"Windows 10 Pro",
};

//normal way
// const os = system.os;
// const version= system.version;
// const license= system.license;

//destructuring way
const {os,version,license}=system;
console.log(os);
console.log(version);
console.log(license);

//Destructuring also works in function parameters
//normal way
function displaySystem({os, version, license}){
    console.log(`OS: ${os}, Version: ${version}, License: ${license}`);
}
displaySystem(system);
//destructuring way
function displaySystem2({os, version, license}){
    console.log(`OS: ${os}, Version: ${version}, License: ${license}`);
}
displaySystem2(system);