/**
 * Nesting properties in  obj
 */
const tournament = {
  referee: {
    name: "Sally",
    age: 25,
  },
  prize: {
    units: "dollars",
    value: 100,
  },
};
//accessing
console.log(tournament.referee.name); // Sally
console.log(tournament.prize.value); // 100
console.log("*******************************"); // 100
//-------------------------------------------------------------
let campaignLive = {
  name: 'Jurassic Campaign',
  messageCount: 100,
  creator: {
    firstName: 'Ian',
    lastName: 'Malcolm',
    createdAt: '2023-10-01T09:00:00+00:00'
  }
}
//Finish the getCampaignCreator function, which takes a campaign object 
// and returns the creator's first name.
function getCampaignCreator(campaign) {
  return campaign.creator.firstName+" "+campaign.creator.lastName; 
}

console.log(getCampaignCreator(campaignLive));

//----------------------------------------------------------
//optional chaining 
/**
 * When using the normal . operator, if the object on the left side of the . is null
 * or undefined, you'll get a TypeError at runtime! Thankfully, JavaScript has recently 
 * a new operator to make dealing with this headache easier,
 * the optional chaining operator: ?.
 */

const IPL = {
  prize: {
    units: "dollars",
    value: 100,
  },
};

//const refHeight= IPL.referee.height;
// TypeError: Cannot read properties of undefined (reading 'height')
const h = IPL.referee?.height;
console.log(h);
// undefined but no error
//------------------------------------------------------------------------------
let campaign101= {
        name: "Welcome Campaign",
        messageCount: 100,
        creator: {
          firstName: "Tim",
          lastName: "Murphy",
          createdAt: "2023-10-01T09:00:00+00:00",
        },
        location: {
          region: "North America",
        },
      };

      /**
       * omplete the getRegion function. It takes a campaign as input and returns the region 
       * string if the campaign has one. Otherwise, it returns undefined (a falsy value).
       */
      function getRegion(campaign) {
       return campaign.location?.region; 
       
    }

// don't touch below this line
console.log("__________");
console.log(getRegion(campaign101));

        