function solve(input){

    let n = Number(input.shift());
    let bonusPoints = 0
    
    if(n <= 100){
        bonusPoints += 5;
    } else if(n > 100 && n <= 1000){
        bonusPoints = bonusPoints + (n * 0.2);
    } else if(n > 1000) {
        bonusPoints = bonusPoints + (n * 0.1);
    }

    if(n % 2 === 0){
        bonusPoints = bonusPoints + 1;
    } else if(n % 10 === 5){
        bonusPoints = bonusPoints + 2;
    }

    console.log(bonusPoints);
    console.log(n + bonusPoints);


}

solve(['2703']);