function solve(array){

    let object = {};

    for(let line of array){
        let splitted = line.split(' ')
        let name = splitted[0]
        let phone = splitted[1]

        object[name] = phone;
    }
    
    Object.keys(object).forEach(key => console.log(`${key} -> ${object[key]}`))

    // for(let key in object){
    //     console.log(`${key} -> ${object[key]}`)
    // }

}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)