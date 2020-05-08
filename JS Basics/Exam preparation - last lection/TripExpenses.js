function solve(input){

    let numberOfDays = +input.shift();
    let moreMoney = 0
    for(let i = 0; i < numberOfDays;i++){
        let limitMoney = 60 + moreMoney
        let comand = input.shift();
        let counterForThings = 0
        let counterForMoney = 0;
        
        while(true){
            let leftMoney = Math.abs(limitMoney - counterForMoney)
            if(comand === 'Day over'){
                moreMoney = limitMoney - counterForMoney
                console.log(`Money left from today: ${(limitMoney - counterForMoney).toFixed(2)}. You've bought ${counterForThings} products.`)
                break;
            }
            counterForThings++;
            counterForMoney += Number(comand);
            if(counterForMoney >= limitMoney){
                console.log(`Daily limit exceeded! You've bought ${counterForThings} products.`)
                break;
            }
            comand = input.shift();
        }
        
        
    }
    

}
solve([  '2', 'Day over', '130', '100', '40', '20'])