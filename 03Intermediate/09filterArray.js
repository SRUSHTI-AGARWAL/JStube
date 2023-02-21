// Fill operation 

var arr= [2,4,6,8,22,24,26,28]

// arr.fill("empty")   // fills complete array with the string given
// arr.fill("empty",2) // fills the array with the string starting from the index 2 
arr.fill("empty",2,7) // / fills the array with the string starting from the index 2 ending at index 6 as it is exclusive of second range given.


// console.log(arr)

// console.log(arr.filter((e) => (e%2 ===0)))
// filter takes a callback function. 

var superhero= ["batman","superman","thor","hulk","ironman","doraemon"]

console.log(superhero.slice(1,3)) // giving two values will give a range f values from list
console.log(superhero.slice(2)) // giving single value will remove that count of values from start and print others. 
console.log(superhero.slice(superhero.length-1))


// superhero.splice(1,3,"Hello") // starting from index 1 and counting upo 3 elements, replace then alll with the string given. 
superhero.splice(1,3,"Hello", "Bye") // starting from index 1 and counting upo 3 elements, replace then alll with the strings(in case 2 are given both will be substituted) given. 
// console.log(superhero)

console.log(superhero.splice(1,3,"Hello", "Bye")) // here we are printing the spliced part and not the spliced array. 
