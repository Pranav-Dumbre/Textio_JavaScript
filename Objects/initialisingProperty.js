const balances = {
  lane: 100,
  breanna: 150,
  john: 200,
};

// if bob doesn't have a balance yet
// create a new prop for him
// set to 0
if (!balances.bob) { // if key (bob) doesnt exists it gives undefined (falsy) 
                    // thus to check it we can use (!obj.propertyName)
  balances.bob = 0;
}