// why are array required: 

// DB will send the data to user in one or the other form of Array.

var countries = ["India", "Japan","Russia","Vietnam"]

// another way of declaring array using 'new' Keyword 
var states = new Array("uttarakhand","Rajasthan","Haryana","Delhi")

console.log(states.push("Assam"))   // adding element at last.
console.log(states)   // printing array
console.log(countries[0])   // accessing values using index
console.log(countries.length)   // . operator


countries[1]= "Canada"

console.log(countries)

// objects can be used for storing multiple values like this :

var user = ["srishti","srishti.dev@lco", "Javascript",300]

console.log(user)
user.pop()
console.log(user)
user.pop()    // popping element from last 
console.log(user)

// removing element at first

user.unshift("NEW VALUE")    // adding value at front of array
// console.log(user)
// user.shift()
// console.log(user)
user.shift()                // removing value from front of array
console.log(user)

// using "indexOf() function" 

console.log(user.indexOf("srishti"))
console.log(user.indexOf("helllo"))  // this gives the value -1 which can be used anywhere for comparison. 
console.log(Array.from("srishti"))  // string to Array
