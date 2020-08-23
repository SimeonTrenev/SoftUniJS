function phoneBook(array){


let contacts = {}

for(let line of array){
    let [name,phone] = line.split(' ')
    contacts[name] = phone
}
   
    for(let key in contacts){
        console.log(`${key} -> ${contacts[key]}`)
    }
    

//     let contacts = new Map()

// for(let line of array){
//     let [name,phone] = line.split(' ')
//     contacts.set(name,phone)
// }
//     contacts.forEach((names,phones) => console.log(`${phones} -> ${names}`))
  

// let object = {};

// for(let line of array){
//     let splitted = line.split(' ')
//     let name = splitted[0]
//     let phone = splitted[1]

//     object[name] = phone;
// }

// Object.keys(object).forEach(key => console.log(`${key} -> ${object[key]}`))

// // for(let key in object){
// //     console.log(`${key} -> ${object[key]}`)
// // }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)