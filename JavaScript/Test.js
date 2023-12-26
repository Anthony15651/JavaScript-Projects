console.log("Test");
const groupId = 'T';

showUsers = groupId != undefined && groupId != null && groupId != '' ? false : true;

// would that be the same?
// showUsers = !!groupId

console.log(showUsers);

