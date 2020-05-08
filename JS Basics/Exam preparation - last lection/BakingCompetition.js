function solve(input){

    let numberOfPeople = +input.shift();
    let priceOfCookies = 1.50;  
    let priceOfCakes = 7.80;
    let priceOfWaffles = 2.30;
    let sum = 0;
    let counter = 0
    let counterOfAll = 0
    for(let i = 0; i < numberOfPeople;i++){
        let counterOfCookies = 0;
        let counterOfCakes = 0;
        let counterOfWaffles = 0;
        let name = input.shift();
            let typeOfSweets = input.shift();
        while(typeOfSweets !== 'Stop baking!'){
            let numberOfSweets = +input.shift();
            if(typeOfSweets === 'cookies'){
                sum += numberOfSweets * priceOfCookies;
                counterOfCookies += numberOfSweets;
            }else if(typeOfSweets === 'cakes'){
                sum += numberOfSweets * priceOfCakes;
                counterOfCakes += numberOfSweets;
            }else if(typeOfSweets === 'waffles'){
                sum += numberOfSweets * priceOfWaffles;
                counterOfWaffles += numberOfSweets
            }
            counterOfAll += numberOfSweets
            typeOfSweets = input.shift();

        }
        console.log(`${name} baked ${counterOfCookies} cookies, ${counterOfCakes} cakes and ${counterOfWaffles} waffles.`)
        
    }
    console.log(`All bakery sold: ${counterOfAll}`)
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`)

}
solve(['3',            'Iva',
'cookies',      '5',
'cakes',        '3',
'Stop baking!', 'George',
'cakes',        '7',
'waffles',      '2',
'Stop baking!', 'Ivan',
'cookies',      '6',
'Stop baking!']);