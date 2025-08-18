/**
 * Default parameters useful for optional parameters
 * ensures specific default behaviour
 * 
 * Assignment
Textio allows you to save contacts, so you can easily send them messages. Complete the createContact function. It should take three parameters:
phoneNumber
name, with a default parameter of 'Anonymous'
avatar, with a default parameter of 'default.jpg'
If a phoneNumber is not passed, it should return the string 
"Invalid phone number". Otherwise, create a new string by concatenating 
the given avatar to the string "/public/pictures/", 
for example: /public/pictures/boots.jpg.

Then return a string in this exact format:
Contact saved! Name: NAME, Phone number: PHONE_NUMBER, Avatar: AVATAR_FILEPATH.
Replacing NAME, PHONE_NUMBER, and AVATAR_FILEPATH with the given contact info.

 */
function createContact(phoneNumber, name='Anonymous',avatar='default.jpg') {
  // ?
  if(phoneNumber==""){
    return "Invalid phone number";
  }
  let avatar_path = "/public/pictures/"+avatar;
let response = `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatar_path}`;
  return response;
}

console.log(createContact("","john"));//Invalid phone number
console.log(createContact("9999999"));//Contact saved! Name: Anonymous, Phone number: 9999999, Avatar: /public/pictures/default.jpg
console.log(createContact("79859544","Ram","av1.jpg"));//Contact saved! Name: Ram, Phone number: 79859544, Avatar: /public/pictures/av1.jpg