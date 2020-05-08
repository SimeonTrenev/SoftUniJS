function solve(input){

    let volumeInLitres = Number(input.shift());
    let debitForHours1Truba = Number(input.shift()); // debit na truba 1 za 1 chas
    let debitForHours2Truba = Number(input.shift()); // debit na truba 2 za 1 chas
    let hours = Number(input.shift());

    let foolingForHours = (debitForHours1Truba + debitForHours2Truba) * hours;
    let truba1 = debitForHours1Truba * hours;
    let truba2 = debitForHours2Truba * hours;
    
    let percentForTruba1 = (truba1 / foolingForHours) * 100;
    let percentForTruba2 = (truba2 / foolingForHours) * 100;
    let percentFuller = (foolingForHours / volumeInLitres) * 100;


    if(foolingForHours <= volumeInLitres){
        console.log(`The pool is ${(percentFuller)}% full. Pipe 1: ${percentForTruba1.toFixed(2)}%. Pipe 2: ${percentForTruba2.toFixed(2)}%.`);
    }else{
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(foolingForHours - volumeInLitres).toFixed(2)} liters.`)
    }

}

solve(['1000', '100', '120', '3']);