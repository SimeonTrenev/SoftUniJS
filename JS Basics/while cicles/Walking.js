function solve(input){
    let goalsSteps = 10000;
    let sumOfSteps = 0;
    let steps = ''
    let isGoingHome = false

    while(goalsSteps > sumOfSteps){
        steps = input.shift();
        if(steps !== 'Going home'){
            sumOfSteps += Number(steps);
            if(isGoingHome){
                break;
            }
        }else{
            isGoingHome = true
        }

    }
    let result = goalsSteps - sumOfSteps
    if(sumOfSteps >= goalsSteps){
        console.log(`Goal reached! Good job!`)
    }else{
        console.log(`${result} more steps to reach goal.`)
    }
}
solve(['1500', '3000', '250', '1548', '2000', 'Going home', '2000', '' ]);