// vising this keyword again. 

// for all regular funstion calls this pointsto window object. 

// in case of node the global empty object. 

 console.log(this)

 var user = {
    name:"Srishti",
    courseCount: 4,
    getCourseCount:function(){
        console.log("This is Line Number 13",this)
            function sayHello(){
                console.log("This is Line Number 15",this)
            }

            sayHello()   // this is a regular function call
    }
    }
 
    user.getCourseCount() // this is not a regular function call, but a one through object. 
    