var user= {
    firstName: "Srishti",
    LastName: "Agarwal",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (coursename){             // defining a method inside an object
        if (coursename.length == 0 )
        console.log("You have passed an empty value")
        else

        this.courseList.push(coursename)

    },
    getCourseCount:function (){
       
        return `${this.firstName} is enrolled in total ${this.courseList.length} number of courses`
    } ,

    info: function (){

    }
}

var courseList=true;
console.log(user.firstName)
console.log(user["LastName"])

user.loginCount=44
console.log(user.loginCount)


user.buyCourse("Cloud Computing")
user.buyCourse("")
user.buyCourse("OS")
console.log(user.getCourseCount())

console.table(user)

// Assignment: 
// design a method info. that gives all the information to us using the object defined.
