function integerOrFloat(firstNumber,secondNumber,thirdNumber){

    let sum = firstNumber + secondNumber + thirdNumber
    
    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`)

}
integerOrFloat(100, 200, 303)