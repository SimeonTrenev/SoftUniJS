function fuelMoney(distance, passengers, priceForLiterDiesel){
    let allFuel = (distance / 100)*7 + (passengers * 0.1);
    let money = allFuel * priceForLiterDiesel   
    console.log(`Needed money for that trip is ${money}lv.`)
}
fuelMoney(260, 9, 2.49)