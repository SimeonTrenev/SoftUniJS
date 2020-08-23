function fuelMoney(distance, passengers, priceForDiesel){

    let fuelLitres = (distance / 100) * 7 + passengers * 0.100
    
    let price = priceForDiesel * fuelLitres
    console.log(`Needed money for that trip is ${price}lv.`)

}
fuelMoney(260, 9, 2.49)