class Contact {
  constructor(name, phoneNumber) {
    this.name = name;
    this._phoneNumber = phoneNumber;
  }
  //Notice that we've renamed this.phoneNumber to this._phoneNumber
  //in our constructor to avoid a name collision with the getter itself.

  set phoneNumber(value){
        if(value.toString().length==10){//Checks if the number is exactly 10 digits long.
            this._phoneNumber=value;//If it's valid, sets the internal _phoneNumber property.
    }else{
        console.log("Invalid phone number");
    }
  }

  //Add a getter for phoneNumber that returns the number in this formatted style: "(123) 456-7890"
  get phoneNumber(){ //getter
    let value= this._phoneNumber;
    return `(${value.toString().slice(0,3)})${value.toString().slice(3,6)}-${value.toString().slice(6,10)}`;
  }
  // ?

}

const pranav=new Contact("Pranav",9307751010);
console.log(pranav.phoneNumber);
pranav.phoneNumber=123;
console.log(pranav.phoneNumber);
pranav.phoneNumber=7517996618;
console.log(pranav.phoneNumber);


