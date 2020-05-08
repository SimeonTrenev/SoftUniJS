function solve(input){

    let startedNumberOfEggs = +input.shift();
    let count = 0;
    let comand = input.shift()
    let number = +input.shift()
    while(comand !== 'Close'){
        if(comand === 'Fill'){
            startedNumberOfEggs += number;
        }else if(comand === 'Buy'){
            if(number > startedNumberOfEggs){
                break;
            }
            startedNumberOfEggs -= number
    
            count += number
        }
         comand = input.shift();
         number = +input.shift();
    }
    let sum = startedNumberOfEggs;
        if(comand === 'Close'){
            console.log("Store is closed!")
            console.log(`${count} eggs sold.`)
        }else{
            console.log('Not enough eggs in store!')
            console.log(`You can buy only ${sum}.`)
        }

}
solve(['13', 'Buy',
'8',  'Fill',
'3',  'Buy',
'10'])