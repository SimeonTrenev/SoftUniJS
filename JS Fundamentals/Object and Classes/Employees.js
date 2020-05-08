function employees(arr){


    let myArr = [];
    
    for(let personalName of arr){
        let object = {
            name : personalName,
            personalNumber : personalName.length
        }   
        myArr.push(object)
    }
    for(let key of myArr){
        console.log(`Name: ${key.name} -- Personal Number: ${key.personalNumber}`)
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )