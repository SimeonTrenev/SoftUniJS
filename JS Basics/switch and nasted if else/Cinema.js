function solve(input){

    let typeOfFilms = input.shift();
    let r = +input.shift();
    let c = +input.shift();

    let priceForPremiere = 12.00;
    let priceForNormal = 7.50;
    let discount = 5.00;

    price = 0.0;

    if(typeOfFilms === 'Premiere'){
        price = priceForPremiere * r * c;
    }else if(typeOfFilms === 'Normal'){
        price = priceForNormal * r * c;
    }else{
        price = discount * r * c;
    }
    console.log(`${price.toFixed(2)} leva`);
}

solve(['Discount', '12', '30']);