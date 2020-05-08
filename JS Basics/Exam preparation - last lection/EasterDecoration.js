function solve(input){

    let basket = 1.5;
    let wreath = 3.80;
    let chocolateBunny = 7
    let numberOfClients = +input.shift();
    let price = 0;
    
    for(let i = 0; i < numberOfClients;i++){
        let comand = input.shift();
        let currentPrice = 0
        let counter = 0
        while(comand !== 'Finish'){
            counter++;
            if(comand === 'basket'){
                // price += basket
                currentPrice += basket
            }else if(comand === 'wreath'){
                // price += wreath
                currentPrice += wreath
            }else if(comand === 'chocolate bunny'){
                // price += chocolateBunny
                currentPrice += chocolateBunny
            }
            comand = input.shift()
        }
        if(counter % 2 === 0){
            currentPrice *= 0.8
        }
        console.log(`You purchased ${counter} items for ${currentPrice.toFixed(2)} leva.`)
        price += currentPrice
       
    }
    let middlePrice = price / numberOfClients;
    console.log(`Average bill per client is: ${middlePrice.toFixed(2)} leva.`)

}
solve([ '2',
'basket',
'wreath',
'chocolate bunny',
'Finish',
'wreath',
'chocolate bunny',
'Finish'])