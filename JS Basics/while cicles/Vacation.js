function solve(input){

    let neededMoney = +input.shift();
    let money = +input.shift();
    let days = 0;
    let daysForSpend = 0;
    while((daysForSpend < 5) && (money < neededMoney)){
        
        let comand = input.shift();
        let saveOrSpendMoney = +input.shift();
        if(comand === 'spend'){
            daysForSpend++;
            money -= saveOrSpendMoney
            if(money < 0){
                money = 0
            }
            
        }else{
            daysForSpend = 0;
            money += saveOrSpendMoney
        }
        days++;
        
    }
        if(money >= neededMoney){
        console.log(`You saved the money for ${days} days.`)
            
        }
            if(daysForSpend === 5){
            console.log("You can't save the money.");
            console.log(days)
        }
    }
    

solve([   '250',   '150',
'spend', '50',
'spend', '50',
'save',  '100',
'save',  '100']);