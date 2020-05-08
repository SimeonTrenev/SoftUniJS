function storage(array){

    let mapped = new Map();
    

    for(let item of array){
        let news = item.split(' ');
        let product = news[0]
        let quantity = Number(news[1])

        if(!mapped.has(product)){
            mapped.set(product,+quantity)
        }else{
            let currentQuantity = mapped.get(product)
            let newQuantity = currentQuantity += quantity;
            mapped.set(product,newQuantity)
        }
    }
  
    mapped.forEach((product,quantity)=>{
        console.log(`${quantity} -> ${product}`)
    })
    

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)