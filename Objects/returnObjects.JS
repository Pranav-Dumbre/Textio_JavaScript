// in js we can return only single vslue from a function
// but we can return an object which can have multiple values as its properties
function createUser(name,age){
    return {
        name:name,
        age:age
    };
}
let user1 = createUser("Pranav",24);
console.log(user1);
console.log(user1.name);

function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
 // return openRate, clickRate, conversionRate; // WRONG! only conversionRate will be returned
  return { openRate, clickRate, conversionRate }; // CORRECT! return an object with all three metrics
}
const metrics = calculateCampaignMetrics(100, 50, 25);