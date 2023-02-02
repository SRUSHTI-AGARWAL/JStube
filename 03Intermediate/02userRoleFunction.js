/* 
Defin a function that can answer the role of a user.
A user can be on following roles:

admin- with all access
subadmin- with access to create/delete courses
testprep- with access to create/delete tests
user- consume all content
other- trial user

Input : getUserRole(name. role)
*/

function getUserRole(name, role){


    switch(role){
        
    case "admin":
       return ` ${name} is admin with all access`
    break;  // Not necessary as once the value is returned , code further does not execute.

    case "subadmin":
       return `${name} is having access to create/delete courses`
    break;

    case "testprep":
       return ` ${name} is  having access to create/delete tests`
    break;
   
    default:
        return " ${name} is a trial user"
}
   }



var val = getUserRole("Srishti","admin")

console.log(val)

console.log(getUserRole("Twinkle","subadmin"))

// var justArrow = getUserRole =>(user, role){

// }