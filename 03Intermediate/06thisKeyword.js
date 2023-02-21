//  ToDO: Part 1 of this keyword. 

// simply printing this keyword  prints what all does your Global Context holds. Global Context differs with the engine being used.


console.log(this)
// output given by above is empty scope , but right now JS engine being used is node which ultimately supports V8 engine and not in browser. 
// while running same  log statement in browser, global context obtained is Window which has a lot of properties.



// function sayName(){

//     var name = " Srishti "
//     console.log(this)
// }

// sayName();


