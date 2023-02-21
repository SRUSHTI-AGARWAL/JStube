function sayHello(name){

    console.log("Hi there", name)
    console.log(`Hi there ${name}, hope you are doing fine!`)  //EMBEDING VARIABLE

}

// sayHello(); // value when not given says undefined. 
// sayHello("Srishti")

// We call a function by using (), and refer a function by using Just its name. 

function sayNamaste(name){

    return " Hey There! You are Srishti"

}


// Calling a fn by return keyword and another by console.log are two different things. 

var val = sayNamaste()
console.log(val)