function solve(input){

    let budget = +input.shift();
    let numberOfStatists = +input.shift();
    let priceForClothesForOneStatist = +input.shift(); // za 1 statist
    let decorForFilm = budget * 0.1;
    let sumForClother = numberOfStatists * priceForClothesForOneStatist;
    if(numberOfStatists > 150){
        sumForClother = sumForClother * 0.9;
    }
    let money = decorForFilm + sumForClother;
    let result = Math.abs(money - budget)
    if(money > budget){
        console.log('Not enough money!');
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`)
    }else if(budget >= money){
        console.log('Action!');
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`)
    }


}
solve(['20000', '120', '55.5']);