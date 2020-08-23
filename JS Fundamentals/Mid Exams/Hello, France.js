function helloFrance(arr){

    let array = arr.slice();
    let collectionOfItems = array.shift().split('|');
    let budget = Number(array.shift());
    let ourCollectionItems = [];
    
    for(let i = 0; i < collectionOfItems.length;i++){
        let currentComands = collectionOfItems[i].split('->')
        let item = currentComands[0];
        let price = Number(currentComands[1])

        if(item === 'Clothes'){
            if(price <= 50.00 && budget >= price){
                budget -= price
                ourCollectionItems.push(price)
            }
        }else if(item === 'Shoes'){
            if(price <= 35.00 && budget >= price){
                budget -= price
                ourCollectionItems.push(price)
            }
        }else if(item === 'Accessories'){
            if(price <= 20.50 && budget >= price){
                budget -= price
                ourCollectionItems.push(price)
            }
        }
    }
    let collectionWithProfit = ourCollectionItems.map((x) => (x * 1.4).toFixed(2));
    
    let sumOfFirstCollection = 0;
    for(let elements of ourCollectionItems){
        sumOfFirstCollection += Number(elements)
    }
    let sumOfNewCollection = 0;
    for(let elements of collectionWithProfit){
        sumOfNewCollection += Number(elements)
    }
    let profit = Math.abs(sumOfNewCollection - sumOfFirstCollection)
    let result = sumOfNewCollection + budget
    console.log(collectionWithProfit.join(' '))
    console.log(`Profit: ${profit.toFixed(2)}`)
    if(result >= 150){
    console.log('Hello, France!')
    }else{
        console.log('Time to go.')
    }

}
helloFrance([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
  ])