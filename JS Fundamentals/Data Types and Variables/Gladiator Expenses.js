function gladiatorExpenses(lostFigths, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let price = 0;
    for(let i = 1; i <= lostFigths;i++){
        if(i % 12 === 0){
            price += armorPrice + shieldPrice + swordPrice + helmetPrice
        }else if(i % 6 === 0){
            price += shieldPrice + swordPrice + helmetPrice
        }else if(i % 3 === 0){
            price += swordPrice
        }else if(i % 2 === 0){
            price += helmetPrice
        }
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`)

}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    
    )