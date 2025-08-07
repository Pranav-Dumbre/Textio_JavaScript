true && true; // true
true && false; // false
true || false; // true
false || false; // false
!false; // true
!true; // false
/*
Textio needs to determine whether an SMS campaign is considered "high-engagement".

A campaign qualifies as having high-engagement if it meets the following criteria:

It has a high open rate
It is a recent campaign
It either has a strong reply rate or can be sent again
It is not flagged as spam
*/
const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate = false;
const canBeResent = true;
const isFlaggedAsSpam = false;

// don't touch above this line

const isHighEngagement = hasHighOpenRate && isRecent&&( hasStrongReplyRate||canBeResent) && !isFlaggedAsSpam;
  // don't touch below this line

  console.log(`The campaign is high-engagement: ${isHighEngagement}`);
