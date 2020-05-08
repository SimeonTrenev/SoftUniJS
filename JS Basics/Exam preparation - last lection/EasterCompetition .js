function solve(input){

    let numberOfCake = +input.shift();
    let sum = 0;
    let nameBest = ''
    let max = Number.MIN_SAFE_INTEGER
    let currentScore = 0;
    for(let i = 0; i < numberOfCake;i++){
        let name = input.shift();
        let score = input.shift();
        while(score !== 'Stop'){
            currentScore += Number(score)
            sum += Number(score)
            score = input.shift()
           
        }
        console.log(`${name} has ${currentScore} points.`)
        if(max < currentScore){
            max = currentScore
            nameBest = name
            console.log(`${name} is the new number 1!`)
        }
        currentScore = 0;
    }
    console.log(`${nameBest} won competition with ${max} points!`)
}
solve(['2',         'Chef Angelov',
'9',         '9',
'9',         'Stop',
'Chef Rowe', '10',
'10',        '10',
'10',        'Stop'])