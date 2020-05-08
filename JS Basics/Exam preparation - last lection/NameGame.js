function solve(input){
    
    let sweets = 1.5;
    let cakes = 7.80;
    let waffles = 2.30;
    let counterForAllSweets = 0;
    let sumForCharity = 0;
    let numberOfPlayers = +input.shift();
    for(let i = 0; i < numberOfPlayers;i++){
        let counterForCookies = 0;
        let counterForCakes = 0;
        let counterForWaffles = 0;
        let nameOfPlayer = input.shift();
        let typeOfCakes = input.shift();
        while(typeOfCakes !== 'Stop baking!'){
            let numberOfCakes = +input.shift();
            if(typeOfCakes === 'cookies'){
                counterForAllSweets += numberOfCakes;
                counterForCookies += numberOfCakes
                sumForCharity += numberOfCakes * 1.5;
            }else if(typeOfCakes === 'cakes'){
                counterForAllSweets += numberOfCakes;
                counterForCakes += numberOfCakes
                sumForCharity += numberOfCakes * 7.8;
            }else if(typeOfCakes === 'waffles'){
                counterForAllSweets += numberOfCakes;
                counterForWaffles += numberOfCakes
                sumForCharity += numberOfCakes * 2.30;
            }
            typeOfCakes = input.shift();
        }
        console.log(`${nameOfPlayer} baked ${counterForCookies} cookies, ${counterForCakes} cakes and ${counterForWaffles} waffles.`)
    }
    console.log(`All bakery sold: ${counterForAllSweets}`)
    console.log(`Total sum for charity: ${sumForCharity.toFixed(2)} lv.`)

}
solve(['3',            'Iva',
'cookies',      '5',
'cakes',        '3',
'Stop baking!', 'George',
'cakes',        '7',
'waffles',      '2',
'Stop baking!', 'Ivan',
'cookies',      '6',
'Stop baking!'
])