/**
 * In Textio, users create text campaigns to send messages to their contacts. Each campaign needs a unique ID for tracking and management.

Complete the addID function. It takes a campaignRecord object as input and returns it with a newly generated id property added:

campaignName-senderName

Where campaignName and senderName are already properties of the campaignRecord object.
 */
function addID(campaignRecord) {
 if(!campaignRecord.id){
    id=campaignRecord.campaignName+"-"+campaignRecord.senderName;
    campaignRecord.id=id;
    return campaignRecord;
 }
 else return campaignRecord;
}

console.log(addID({campaignName:"BJP",senderName:"Admin"}));
console.log(addID({campaignName:"Hello",senderName:"james",id:"Hello-james"}));
