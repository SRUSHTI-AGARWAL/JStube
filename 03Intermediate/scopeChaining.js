var name = "Srishti"

console.log("Line number 3", name)

function sayName(){

    var name = "Ms. S" // if var is not declared here , then name from Global context gets printed. 
    console.log("Line number 8", name)


    saynameTwo(); // asks for var just above it if no var is defined in its scope. else goes to the Globally defined variable. 

    function saynameTwo(){
            var name= "Ms. SA"
            console.log("Line number 14", name)
    }
}

sayName()

