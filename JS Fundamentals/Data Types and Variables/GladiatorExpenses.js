function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let sum = 0;
    for(let i = 1;i <= lostFightsCount;i++){
        if(i % 12 === 0){
            sum += armorPrice
        }
        if(i % 6 === 0){
            sum += shieldPrice 
        }
        if(i % 3 === 0){
            sum += swordPrice
        }
        if(i % 2 === 0){
            sum += helmetPrice
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
gladiator(23,
    12.50,
    21.50,
    40,
    200    
    )