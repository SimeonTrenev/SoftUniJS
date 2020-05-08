function solve(input){

    let numberOfKozunacks = +input.shift();
    let score = 0;
    let nameOfPeople = '';
    let grade = 0;
    let comand = ''
    for(let i = 0; i < numberOfKozunacks; i++){
        nameOfPeople = input.shift();
        while(nameOfPeople !== 'Stop'){
            grade = +input.shift();
            score += grade
        }
        nameOfPeople += comand
    }
    let max = Math.max(nameOfPeople)
    if(nameOfPeople === 'Stop'){
        console.log(`${comand} has ${score} points.`)
    }
    if(comand){
        console.log(`${comand} is the new number 1!`)
    }
    console.log(`${comand} won competition with ${max} points!`)
}
solve(['3',      'Chef Manchev',
'10',     '10',
'10',     '10',
'Stop',   'Natalie',
'8',      '2',
'9',      'Stop',
'George', '9',
'2',      '4',
'2',      'Stop']);