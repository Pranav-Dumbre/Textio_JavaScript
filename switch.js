//switch case
const os = "mac";
let creator ;
switch(os){
    case "linux":
        creator="Linus Torvalds";
        break;//necesssary as fallthrough happens in Js till break or return
    case "windows":
        creator="Bill gates";
        break;
    case "mac":
        creator="Steve";
        break;
    default:
        creator="Unknown";
}
console.log(creator);