function wrongResult(firsNumber, secondNumber, thirdNumber){

    if((firsNumber < 0 && secondNumber > 0 && thirdNumber > 0) || (firsNumber > 0 && secondNumber < 0 && thirdNumber > 0) ||
    (firsNumber > 0 && secondNumber > 0 && thirdNumber < 0) || (firsNumber < 0 && secondNumber < 0 && thirdNumber < 0)){
        return 'Negative'
    }else if((firsNumber > 0 && secondNumber > 0 && thirdNumber > 0) || (firsNumber > 0 && secondNumber < 0 && thirdNumber < 0) ||
    (firsNumber < 0 && secondNumber > 0 && thirdNumber < 0) || (firsNumber < 0 && secondNumber < 0 && thirdNumber > 0) || 
    (firsNumber === 0 || secondNumber === 0 || thirdNumber === 0)){
        return 'Positive'
    }

}
let result = wrongResult(-1, 0, 1)
console.log(result)