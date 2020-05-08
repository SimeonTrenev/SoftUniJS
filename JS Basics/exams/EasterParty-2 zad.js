function solve(input){

    let numberOfGuests = +input.shift();
    let priceForCouvertForOnePeople = +input.shift();
    let budget = +input.shift();
    let price = 0;

    if(numberOfGuests >= 10 && numberOfGuests <= 15){
        price = priceForCouvertForOnePeople * 0.85 * numberOfGuests;
    }else if(numberOfGuests > 15 && numberOfGuests <= 20){
        price = priceForCouvertForOnePeople * 0.8 * numberOfGuests;
    }else if(numberOfGuests > 20){
        price = priceForCouvertForOnePeople * 0.75 * numberOfGuests;
    }else{
        price = priceForCouvertForOnePeople * numberOfGuests;
    }
    let cake = budget * 0.1;
    let all = price + cake;
    let result = Math.abs(budget - all)

    if(budget >= all){
        console.log(`It is party time! ${result.toFixed(2)} leva left.`)
    }else{
        console.log(`No party! ${result.toFixed(2)} leva needed.`)
    }
}
solve(['8', '25', '340']);