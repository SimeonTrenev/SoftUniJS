function solve(input){

    

    for(let key of input){
        
        let value = key.length;
        
        
        let object = {name: key, pesonalNumber: value}
        console.log(`Name: ${key} -- Personal Number: ${value}`)
    }



}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )