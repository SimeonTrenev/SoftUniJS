function solve(input){

    let sumOfPrimeNumbers = 0;
    let sumOfNonPrimeNumbers = 0;
    let comand = input.shift();
    while(comand !== 'stop'){
        comand = Number(comand);
        let isPrime = true;
        if(comand < 0){
            console.log('Number is negative.')
           comand = input.shift()
           continue;
        }
        
        let maxDelimiter = Math.sqrt(comand);
        for(let i = 2;i <= maxDelimiter;i++){
            if(comand % i === 0){
                isPrime = false;
                break;
        }
    }
        if(isPrime){
            sumOfPrimeNumbers += comand;
        }else{
            sumOfNonPrimeNumbers += comand;
        }
        comand = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimeNumbers}`)

}
solve(['3',    '9',
'0',    '7',
'19',   '4',
'stop', ''])