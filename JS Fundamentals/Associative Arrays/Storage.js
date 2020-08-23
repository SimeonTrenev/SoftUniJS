function storage(array){

    let mapped = new Map();

    for(let line of array){
        let [product, quantity] = line.split(' ')
        quantity = Number(quantity)
        if(mapped.has(product)){
            let oldQuantity = mapped.get(product)
            let newQuantity = oldQuantity + quantity
            mapped.set(product,newQuantity)
        }else{
            mapped.set(product,quantity)
        }
    }
    // mapped.forEach((product,quantity) => console.log(`${quantity} -> ${product}`))
    let iterated = Array.from(mapped.entries()).forEach(key => {
        console.log(`${key[0]} -> ${key[1]}`)
    })
   
       

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)