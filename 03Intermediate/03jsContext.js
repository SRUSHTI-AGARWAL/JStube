sayHello();   // global context is available here. 

function sayHello() {


    console.log("Hello Srishti! , You are fine");

}
// Global Context is JS which is needed to register all the things in  code so that once the function is registered then that function is wrapped up and put inside Global context so whenever the code executes it is
// aware of those functions and does not give error for example, function being  called before definition does not gives error. 

// Here, function defintion is written after the function call and this is what is Global Context in JS. 
// There is a global object inside JS which executes a lot of things.

myName= " srishti"
sayHello() // as the function is called, Execution context kicks in. 

if(myName === window.myName){
    console.log("it is True statement")
}






