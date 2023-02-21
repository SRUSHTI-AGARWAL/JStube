// function isEven(element){
//     // if(element %2 === 0){
//     //     return true
//     // }
//     return element %2===0;   // code minimize , return statement can return a Boolean value 
// }

// console.log(isEven(3))

// Arrow function - with Arrow function, a return keyword is required . 

var isEven = (element) => {
return element %2 ===0
}

// console.log(isEven(5))

// callback fn - a simple function which does not have name. 
// var result = [2,3,6,8].every(isEven)
// console.log(result)  // combined result is obtained for entire array.



var result = [2,4,6,9].every((e) =>(e %2 ===0))


    //  with {} in the arrow function, we have to return somethimg and hence return statment has to be used. 
    // when return statement is not used then {} have to be removed and code becomes single liner with only () 

console.log(result)

// here function is not ran directly but is passed as reference
//number , index, array can only be used with every function as arguments.

// 'every' goes into the array and look for every single element, and whatever is said inside that array it will do
// that test or the operation on every single element.