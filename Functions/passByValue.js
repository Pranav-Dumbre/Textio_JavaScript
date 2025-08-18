/**
 * Pass by value:
 * function receives a copy of the variable.
 * The function is unable to mutate the caller's original data.
 * 
 * Objects and arrays are Passed by reference 
 */
let x = 5;
increment(x);
console.log(x);
// 5

function increment(x) {
  x++;
  console.log(x);
  // 6
}
/**
 * Assignment
Fix the bugs in the monthlyBillIncrease and getBillForMonth functions.

monthlyBillIncrease: Returns the increase in the bill from the previous to the current month. If the bill decreased, it should return a negative number.
getBillForMonth: Returns the bill for the given month.
It looks like whoever wrote the getBillForMonth function thought that they could pass in the bill parameter, update it inside the function, and that update would apply in the parent function (monthlyBillIncrease). They were wrong.

Change the getBillForMonth function to explicitly return the bill for the given month, and be sure to capture that return value properly in the monthlyBillIncrease function.

The function signature for getBillForMonth should only take 2 parameters once you're done.
 */

function getBillForMonth(costPerSend, messagesSent) {
    let bill;
 return bill = costPerSend * messagesSent;
}

function monthlyBillIncrease(costPerSend, numLastMonth, numThisMonth) {
  let lastMonthBill;
  let thisMonthBill;

  lastMonthBill=getBillForMonth( costPerSend, numLastMonth);
  thisMonthBill=getBillForMonth( costPerSend, numThisMonth);

  return thisMonthBill - lastMonthBill;
}

console.log(getBillForMonth(3,987));
console.log(getBillForMonth(2,221));
console.log(monthlyBillIncrease(2,30,60));
// don't touch below this line

// export { getBillForMonth, monthlyBillIncrease };
