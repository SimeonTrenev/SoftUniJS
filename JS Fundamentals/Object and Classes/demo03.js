function solve(firstArray, secondArray){


    let object = {}
    let currentStock = restock(firstArray,object)
    let orderedStock = restock(secondArray,currentStock)
    for(let key of Object.keys(orderedStock)){
        console.log(`${key} -> ${orderedStock[key]}`)
    }
    
    function restock(arr,obj){
        for(let i = 0; i < arr.length;i += 2){
            const products = arr[i]
            const quantity = Number(arr[i+1])

            if(!obj.hasOwnProperty(products)){
                obj[products] = quantity
            }else{
                obj[products] += quantity
            }
        }
        return obj
    }

}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )