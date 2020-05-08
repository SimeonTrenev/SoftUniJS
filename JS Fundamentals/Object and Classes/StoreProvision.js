function storeProvision(firstArray, secondArray){

    
    let aveableProducts = restock(firstArray,{})
    let orderedProducts = restock(secondArray,aveableProducts)
    for(let key of Object.keys(orderedProducts)){
        console.log(`${key} -> ${orderedProducts[key]}`)
    }
    
    function restock(arr,obj){
        for(let i = 0; i < arr.length;i+=2){
            const products = arr[i]
            const quantity = Number(arr[i+1])

            if(!obj.hasOwnProperty(products)){
                obj[products] = quantity
            }else{
                obj[products] += quantity
            }
            
        }
        return obj;
    }
    
        

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )