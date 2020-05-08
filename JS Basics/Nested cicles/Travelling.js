function solve(input){

    let destination = input.shift();
    let neededMoney = +input.shift();
    let isFound = false;
    let incomingMoney = 0;
    let sum = 0

    while(destination !== 'End'){
        while(neededMoney > sum){
            incomingMoney = input.shift();
            sum += Number(incomingMoney)
            if(neededMoney <= sum){
                console.log(`Going to ${destination}!`)
                sum = 0;
                break;
            }
        }
        destination = input.shift()
        neededMoney = +input.shift()
    }

}
solve([ 'France',   '2000',  '300',
'300',      '200',   '400',
'190',      '258',   '360',
'Portugal', '1450',  '400',
'400',      '200',   '300',
'300',      'Egypt', '1900',
'1000',     '280',   '300',
'500',      'End',   ''])