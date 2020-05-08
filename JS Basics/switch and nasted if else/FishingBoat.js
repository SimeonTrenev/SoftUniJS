function solve(input){

    let budget = +input.shift();
    let seasons = input.shift();
    let fisherman = +input.shift();
    let price = 0.0;

    switch(seasons){
        case 'Spring':
            price = 3000;
            if(fisherman <= 6){
                price = price * 0.9;
            }else if(fisherman >= 7 && fisherman <= 11){
                price = price * 0.85;
            }else{
                price = price * 0.75;
            }
        break;
        case 'Summer':
            price = 4200;
            if(fisherman <= 6){
                price = price * 0.9;
            }else if(fisherman >= 7 && fisherman <= 11){
                price = price * 0.85;
            }else{
                price = price * 0.75;
            }
        break;
        case 'Autumn':
            price = 4200;
            if(fisherman <= 6){
                price = price * 0.9;
            }else if(fisherman >= 7 && fisherman <= 11){
                price = price * 0.85;
            }else{
                price = price * 0.75;
            }
        break;
        case 'Winter':
            price = 2600;
            if(fisherman <= 6){
                price = price * 0.9;
            }else if(fisherman >= 7 && fisherman <= 11){
                price = price * 0.85;
            }else{
                price = price * 0.75;
            }
        break;
    }

    if(fisherman % 2 ===0 && seasons !== 'Autumn'){
        price = price * 0.95;
    }

    let summ = Math.abs(budget - price);
    if(budget >= price){
        console.log(`Yes! You have ${summ.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${summ.toFixed(2)} leva.`);
    }

}

solve(['2000', 'Winter', '13']);