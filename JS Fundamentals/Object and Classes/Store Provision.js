function storeProvision(firstArray, secondArray){

    
    let products = {}
    
    firstArray.forEach((element,i) => {
        if(i % 2 === 0){
       const product = firstArray[i]
       const quantity = Number(firstArray[i + 1])
       products[product] = quantity
    }
   });
    
   secondArray.forEach((element,i) => {
       if(i % 2 === 0){
           const product = secondArray[i]
           const quantity = Number(secondArray[i + 1])
           if(products[product] === undefined){
               products[product] = 0
           }
           products[product] += quantity
       }
   })
   
   for(let key in products){
       console.log(`${key} -> ${products[key]}`)
   }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )