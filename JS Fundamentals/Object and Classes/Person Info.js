function personInfo(firstname, lastname, age){

let person = {firstName: firstname, lastName: lastname, age: age}

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}


}
personInfo("Peter", 
"Pan",
"20"
)