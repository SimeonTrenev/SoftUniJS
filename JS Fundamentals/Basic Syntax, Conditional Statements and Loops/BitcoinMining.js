function bitcoin(input){

    let bitcoinPrice = 11949.16 // lv
    let goldPrice = 67.51 // za gram
    let totalAmmound = 0;
    let bitcoinCount = 0
    let firstDay;
    for(let i = 1; i <= input.length;i++){
        let currentAmmound = input[i - 1];
        if(i % 3 === 0){
            currentAmmound *= 0.7
            totalAmmound += currentAmmound * goldPrice;
        }else{
        totalAmmound += currentAmmound * goldPrice;
        }
        if(totalAmmound >= bitcoinPrice){
            if(firstDay === undefined){
                firstDay = i;
            }
            bitcoinCount += Math.floor(totalAmmound / bitcoinPrice)
            totalAmmound -= Math.floor(totalAmmound / bitcoinPrice) * bitcoinPrice 
        }
 
    }
   console.log(`Bought bitcoins: ${bitcoinCount}`);
   if(firstDay !== undefined){
       console.log(`Day of the first purchased bitcoin: ${firstDay}`)
   }
   console.log(`Left money: ${totalAmmound.toFixed(2)} lv.`);
}
bitcoin([100, 200, 300])