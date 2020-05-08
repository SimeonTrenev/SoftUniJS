function solve(input){

    let flowers = input.shift();
    let countFlowers = +input.shift();
    let budget = +input.shift();
    let price = 0.0;

    switch(flowers){
        case 'Roses':
        price = 5 * countFlowers;
        if(countFlowers > 80){
            price = price * 0.9;
        }
        break;
        case 'Dahlias':
        price = 3.8 * countFlowers;
        if(countFlowers > 90){
            price = price * 0.85;
        }
        break;
        case 'Tulips':
        price = 2.8 * countFlowers;
        if(countFlowers > 80){
            price = price * 0.85;
        }
        break;
        case 'Narcissus':
        price = 3 * countFlowers;
        if(countFlowers < 120){
            price = price * 1.15;
        }
        break;
        case 'Gladiolus':
        price = 2.5 * countFlowers;
        if(countFlowers < 80){
            price = price * 1.2;
        }
        break;
    }
    let sum = Math.abs(budget - price);

    if(budget >= price){
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowers} and ${sum.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`)
    }


}

solve(['Tulips', '88', '260']);