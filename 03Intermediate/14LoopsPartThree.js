// for-in : used for symbols
// and 
// for-of loop : used for Arrays

const names= ["Youtube","facebook","Instagram","Netflix","Amazon"]

console.log("We are using for-of loop")

for(const i of names){
    console.log(i)
}

console.log("We are using for-in loop here..")
const symbols = {
    yt:"Youtube",
    ig:"Instagram",
    fb: "facebook",
    lco:"LearnCodeonline.in"
}

for(const i in symbols) {
    console.log(`${i} : ${symbols[i]}`)
}