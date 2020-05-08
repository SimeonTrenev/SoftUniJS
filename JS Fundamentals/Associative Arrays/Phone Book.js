function phoneBook(array){

    let mapped = new Map();

    for(let el of array){
        let[name,number] = el.split(' ')
        mapped.set(name,number)
        
    }
    mapped.forEach((name,number)=>{
        console.log(`${number} -> ${name}`)
    })
    // for(let [name,phone] of mapped){
    //     console.log(`${name} -> ${phone}`)
    // }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)