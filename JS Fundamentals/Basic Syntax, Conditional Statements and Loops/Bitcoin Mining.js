function bitcoinMining(input){

    let bitcoinPrice = 11949.16
    let goldPriceForGram = 67.51
    let totalMoney = 0;
    let bitcoinCounter = 0;
    let firstDay;

    for(let i = 1; i <= input.length;i++){
        let goldMined = input[i - 1]

        if(i % 3 === 0){
            goldMined *= 0.7
            totalMoney += goldMined * goldPriceForGram
        }else{
            totalMoney += goldMined * goldPriceForGram
        }
        
        if(totalMoney >= bitcoinPrice){
            if(firstDay === undefined){
                firstDay = i;
            }
            bitcoinCounter += Math.floor(totalMoney / bitcoinPrice);
            totalMoney -= Math.floor(totalMoney / bitcoinPrice) * bitcoinPrice;

        }
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`)
    if(firstDay !== undefined){
    console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)


}
bitcoinMining([3124.15, 504.212, 2511.124])