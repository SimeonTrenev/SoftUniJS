function solve(input){

    let days = +input.shift();
    let hourfOfDay = +input.shift();
    let sum = 0
    let counter = 1;
    for(let i = 1; i <= days;i++){
        let onlyCounter = 0
        for(let j = 1; j <= hourfOfDay;j++){
            if(i % 2 === 0 && j % 2 === 1){
                sum += 2.50
                onlyCounter += 2.50 
            }else if(i % 2 === 1 && j % 2 === 0){
                sum += 1.25
                onlyCounter += 1.25
            }else{
                sum += 1
                onlyCounter += 1
            }
            
        }
        console.log(`Day: ${counter} - ${onlyCounter.toFixed(2)} leva`)
        counter++;
    }
    console.log(`Total: ${sum.toFixed(2)} leva`)
}
solve(['2', '5'])