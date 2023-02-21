var user= {
    firstName: "Srishti",
    LastName: "Agarwal",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,

    
}


console.log(user.firstName)
console.log(user["LastName"])

user.loginCount=44
console.log(user.loginCount)
console.table(user)

// Assignment - define a mobile phone: name , modelNo. YearOfRelease, price.

var mobile= {
    brandName: "RealMe",
    ModelNo: "RealMe 6 Pro",
    YearofRelease: 2020,
    Price: 19500
}

console.log(mobile.ModelNo)
console.table(mobile)
