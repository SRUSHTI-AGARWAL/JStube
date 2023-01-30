// ===============Logical AND ===========================================
// User is only allowed to purchase when logged-in
// Email and card-info must be verified. 

// if anything is missing , Stop purchase. 


var isLoggedIn = true
var emailVerified= true
var cardInfo= true 

// if (isLoggedIn){
// console.log("Login Successful")
//     if (emailVerified){
//         console.log("Your E-mail is verified")
//         if(cardInfo){

//             console.log("You can make a purchase")
//         }
//     }
// }

// else{
//     console.log(" Please login first! ")
// }




    if(isLoggedIn && emailVerified && cardInfo){
        console.log("Your cart seems light! Click here to helps us fill it")
    }
