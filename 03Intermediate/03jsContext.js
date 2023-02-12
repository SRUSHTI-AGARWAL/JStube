sayHello();   // global context is available here. 

function sayHello() {


    console.log("Hello Srishti! , You are fine");

}

// Here, function defintion is written after the function call and this is what is Global Context in JS. 
// There is a global object inside JS which executes a lot of things.

myName= " srishti"
sayHello() // as the fucntion is called, Execution context kicks in. 

if(myName === window.myName){
    console.log("it is True statement")
}






