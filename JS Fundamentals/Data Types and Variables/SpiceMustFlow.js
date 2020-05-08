function spiceMustFlow(startingYield){

    let daysCount = 0;
    let yield = startingYield;
    let totalAmount = 0
    let workersConsumation = 26;
    let mineDrop = 10;
    let isDrop = false;
    while(yield >= 100){
        daysCount++;
        totalAmount += yield
        yield -= mineDrop 
        totalAmount -= workersConsumation
        if(yield < 100){
            isDrop = true
            break;
        }  
    }
    if(isDrop){
        totalAmount -= workersConsumation
    }
    console.log(daysCount)
    console.log(totalAmount)
}
spiceMustFlow(111)