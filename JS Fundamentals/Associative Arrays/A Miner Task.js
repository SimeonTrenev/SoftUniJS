function minerTast(array){

    let obj = {}

    for(let i = 0; i < array.length;i+= 2){
        let currentArray = array[i]
        if(obj.hasOwnProperty(currentArray)){
           let oldQuantity = Object.values(obj[currentArray])
           let newQuantity = Number(oldQuantity) + Number(array[i + 1])
           obj[currentArray] += newQuantity
    }else{
        obj[currentArray] = Number(array[i + 1])
    }
    }
    
    for(let keys in obj){
        console.log(`${keys} -> ${obj[keys]}`)
    }

}
minerTast([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    
    
    )