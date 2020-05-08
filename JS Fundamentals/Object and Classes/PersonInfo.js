function personInfo(firstName, lastName, age){

    let parameters = { firstName : firstName , lastName : lastName, age : age }

   for(let key in parameters){
       console.log(`${key}: ${parameters[key]}`)
   }

}
personInfo("Peter", 
"Pan",
"20"
)