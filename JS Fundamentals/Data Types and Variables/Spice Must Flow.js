function spiceMustFlow(ammount){

    let days = 0;
    let startingAmmount = ammount;
    let totalAmmount = 0;
    let flagged = true;
    while(startingAmmount >= 100){
        totalAmmount += startingAmmount;
        totalAmmount -= 26
        startingAmmount -= 10;
        if(startingAmmount <= 100){
            flagged = false;
        }
        days++;
    }
    if(flagged === false){
        totalAmmount -= 26
    }
  
    console.log(days)
    console.log(totalAmmount)
}
spiceMustFlow(450)