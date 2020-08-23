function springVacationTrip(arr){

    let array = arr.slice();

    let days = Number(array.shift());
    let budget = Number(array.shift());
    let people = Number(array.shift());
    let priceForFuelForKm = Number(array.shift());
    let foodExpensesForOnePersonForDay = Number(array.shift());
    let roomPriceForOnePersonForDay = Number(array.shift());
    
    let expensesForAllForFood = days * people * foodExpensesForOnePersonForDay;
    let expensesForAllForHotel = days * people * roomPriceForOnePersonForDay;
    if(people > 10){
        expensesForAllForHotel *= 0.75;
    }
    let currentExpenses = expensesForAllForFood + expensesForAllForHotel
    let isOver = true;
   
    
    
    for(let i = 1; i <= array.length;i++){
        
        let currentDayDistance = Number(array[i - 1]);
        currentExpenses += priceForFuelForKm * currentDayDistance
        
        if(i % 7 === 0 && i % 5 === 0){      
            let withdraw = currentExpenses / people;
            currentExpenses -= withdraw
            currentExpenses *= 1.4
        }else if(i % 7 === 0 && i % 3 === 0){
            let withdraw = currentExpenses / people;
            currentExpenses -= withdraw
            currentExpenses *= 1.4
        }else if(i % 7 === 0){
            let withdraw = currentExpenses / people;
            currentExpenses -= withdraw
        }else if(i % 5 === 0 || i % 3 === 0){
            currentExpenses *= 1.4
        }
        
        if(currentExpenses > budget){
            isOver = false;
            break;
        }
    }

    let finalExpenses = Math.abs(budget - currentExpenses)

    if(isOver){
        console.log(`You have reached the destination. You have ${finalExpenses.toFixed(2)}$ budget left.`)
    }else{
        console.log(`Not enough money to continue the trip. You need ${finalExpenses.toFixed(2)}$ more.`)
    }

}
springVacationTrip([
    '7',   '12000', '5',
    '1.5', '10',    '20',
    '512', '318',   '202',
    '154', '222',   '108',
    '123'
  ])