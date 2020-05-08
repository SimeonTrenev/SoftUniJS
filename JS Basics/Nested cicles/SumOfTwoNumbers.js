function solve(input){

    let number1 = +input.shift();
    let number2 = +input.shift();
    let magicNumber = +input.shift();
    let counter = 0;
    let isFound = false;

    for(let i = number1; i <= number2;i++){
        for(let j = number1; j <= number2;j++){
            let sum = i + j;
            counter++;
            if(sum === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`)
                isFound = true
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
}           
    }
solve(['88', '888', '2000'])