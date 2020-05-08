function calculator(firsNumber, operator, secondNumber){

    let myFirstNumber = firsNumber
    let myOperator = operator.split('')
    let mySecondNumber = secondNumber
    let result = firsNumber + secondNumber;
    let minus = firsNumber - secondNumber;
    let multiplication = firsNumber * secondNumber;
    let delitel = firsNumber / secondNumber;
    if(operator === '+'){
        console.log(result.toFixed(2))
    }else if(operator === '-'){
        console.log(minus.toFixed(2))
    }else if(operator === '*'){
        console.log(multiplication.toFixed(2))
    }else if(operator === '/'){
        console.log(delitel.toFixed(2))
    }
}
calculator(25.5,
    '-',
    3
    )