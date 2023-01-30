// =========================== Switch Case ===================================
// Create an application with followig roles:

//admin - get full access
// subadmin- get access/ to create or delete courses.
// testprep- to create/delete tests
// user- get access to consume content


var user= "abc"
switch(user){
    case "user":
            console.log("You can consume our content")
            break;
    case "admin":
            console.log("You are having full access")
            break;

    case "subadmin":
        console.log("You get access/ to create or delete courses.")        
        break;

    case "testprep":
        console.log("You get access to create/delete tests")
        break;

    default:
        console.log("Trial user")
        break;

}



