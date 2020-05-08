function solve(input){

    let eggsNumberOne = +input.shift();
    let eggsNumberTwo = +input.shift();
    let comand = input.shift();
    let counter1 = 0;
    let counter2 = 0;
    while(comand !== 'End of battle' && eggsNumberOne > counter1 && eggsNumberTwo > counter2 ){
        if(comand === 'one'){
            counter2 += 1
        }else if(comand === 'two'){
            counter1 += 1
        }
        comand = input.shift();
    }
    let leftEggsNumber1 = eggsNumberOne - counter1
    let leftEggsNumber2 = eggsNumberTwo - counter2
    if(eggsNumberOne <= counter1){
        console.log(`Player one is out of eggs. Player two has ${leftEggsNumber2} eggs left.`);
    }else if(eggsNumberTwo <= counter2){
        console.log(`Player two is out of eggs. Player one has ${leftEggsNumber1} eggs left.`);
    }
    if(comand === 'End of battle'){
        console.log(`Player one has ${leftEggsNumber1} eggs left.`);
        console.log(`Player two has ${leftEggsNumber2} eggs left.`)
    }
}
solve([  '2',   '6',
'one', 'two',
'two', '',
'']);