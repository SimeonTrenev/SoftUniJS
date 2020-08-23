function calculator(firstNumber, operator, secondNumber){

    if(operator === '+'){
        console.log((firstNumber + secondNumber).toFixed(2))
    }else if(operator === '-'){
        console.log((firstNumber - secondNumber).toFixed(2))
    }else if(operator === '/'){
        console.log((firstNumber / secondNumber).toFixed(2))
    }else if(operator === '*'){
        console.log((firstNumber * secondNumber).toFixed(2))
    }

}
calculator(25.5,
    '-',
    3
    
    )