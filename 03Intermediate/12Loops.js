// For Loop 
// general syntax
// for(i=0; i<5;i++){
//     console.log(i)
// }

const myStates= ['Uttarakhand',"Rajasthan",2000,"Himanchal Pradesh","Punjab","Kerala"]

// for (i=0; i< myStates.length;i++){
    
//    if(typeof (myStates[i])!== "string") break;
//     console.log(myStates[i])  
    
// }

// While Loop 

// i=0;
// while(i<myStates.length){
//     console.log(myStates[i])
 
//     i++;
// }

let i=0
do{
    i++;
    console.log(myStates[i])
}while(i<myStates.length);