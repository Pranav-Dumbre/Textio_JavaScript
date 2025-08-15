
function getMonthlyPrice(tier) {
  // Your code here...
  switch(tier){
    case "basic":
      return 10000;
      break;
    case "premium":
      return 15000;
      break;
    case"enterprise":
      return 50000;
      break;
    default:
      return 0;
  }
}

// don't touch below this line

export { getMonthlyPrice };
