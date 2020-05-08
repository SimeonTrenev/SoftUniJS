function solve(input){

    let numberOfClients = +input.shift();
    let comand = '';
    let price = 0;
    let basket = 1.50;
    let wreath = 3.80;
    let chocolateBunny = 7;
    let products = 0;
    for(let i = 0;i < numberOfClients;i++){
        comand = input.shift();
        while(comand !== 'Finish'){
            if(comand === 'basket'){
                price = basket * numberOfClients
                products += 1
            }else if(comand === 'wreath'){
                price = wreath * numberOfClients
                products += 1
            }else if(comand === 'chocolate bunny'){
                price = chocolateBunny * numberOfClients
                products += 1
            }
            if(products % 2 === 0){
                price *= 0.8
            }
        }
        } 
        let average = price / numberOfClients
        if(comand === 'Finish'){
            console.log(`You purchased ${products} items for ${price.toFixed(2)} leva.`)
        }else{
            console.log(`Average bill per client is: ${average.toFixed(2)} leva.`)
        }
    
}
solve(['2',
'basket',
'wreath',
'chocolate bunny',
'Finish',
'wreath',
'chocolate bunny',
'Finish'])