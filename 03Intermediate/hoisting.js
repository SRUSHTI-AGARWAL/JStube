tipper("40")


function tipper(a)
{
    var bill = parseInt(a); 
    console.log(bill +5)
}

// bigTipper("20")   , here bigTipper is not a function but a variable so as per rule 2 it will be scanned and made undefined
// and hence cannot be called here and only after the fucntion definition. 


var bigTipper = function (a)
{
    var bill = parseInt(a)
    console.log(bill +15)

}

bigTipper("20")


console.log(name)
var name = "Srishti"
// variables are scanned and made undefinedso access them before initializing will give the value as undefined. 
// But Global context has already scanned it. 


function sayName(){
    var name = " Ms. S"
    console.log(name)
}

sayName();  // here a new context gets loaded on top of Global context i.e Execution Context.  

console.log(name)