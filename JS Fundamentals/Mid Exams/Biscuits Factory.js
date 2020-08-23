function biscuitsFactory (input){
 
    let array = input.slice();

    let biscuitsForWorkerForDay = Number(array.shift());
    let countOfWorkersInFactory = Number(array.shift());
    let otherFactoryBiscuitsFor30Days = Number(array.shift());
    let productionForDay = biscuitsForWorkerForDay * countOfWorkersInFactory
    let sum = 0;

    for(let i = 1; i <= 30;i++){
        if(i % 3 === 0){
            sum += Math.floor(productionForDay * 0.75)
        }else{
            sum += Math.floor(productionForDay)
        }
    }

    console.log(`You have produced ${sum} biscuits for the past month.`)

    let difference = 0
    if(sum > otherFactoryBiscuitsFor30Days){
        difference = sum - otherFactoryBiscuitsFor30Days
        let percent = (difference / otherFactoryBiscuitsFor30Days) * 100
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`)
    }else{
        difference = otherFactoryBiscuitsFor30Days - sum;
        let percent = (difference / otherFactoryBiscuitsFor30Days) * 100
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`)
    }
    
    


    

}
biscuitsFactory([ '65', '12', '26000' ])