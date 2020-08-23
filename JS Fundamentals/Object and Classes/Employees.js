function employees(array){

    let object = {};
    

  array.forEach(name => {
      object[name] = name.length
  });
    
    for(let key in object){
        console.log(`Name: ${key} -- Personal Number: ${object[key]}`)
    }


    // function solve(input){

    //     let array = [];
     
    //     input.forEach(name => {
    //         let object = {
    //             name : name,
    //             personalNumber : name.length
    //         }
    //         array.push(object)
    //     });
     
    //     for(let elements of array){
    //         console.log(`Name: ${elements.name} -- Personal Number: ${elements.personalNumber}`)
    //     }
     
    //  }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )

