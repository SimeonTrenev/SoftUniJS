function sortNumbers(firsNumber, secondNumber, thirdNumber){

    if(firsNumber >= secondNumber && firsNumber >= thirdNumber){
        if(secondNumber >= thirdNumber){
            console.log(firsNumber)
            console.log(secondNumber)
            console.log(thirdNumber)
        }else{
            console.log(firsNumber)
            console.log(thirdNumber)
            console.log(secondNumber)
        }
    }else if(secondNumber >= firsNumber && secondNumber >= thirdNumber){
        if(firsNumber >= thirdNumber){
            console.log(secondNumber)
            console.log(firsNumber)
            console.log(thirdNumber)
        }else{
            console.log(secondNumber)
            console.log(thirdNumber)
            console.log(firsNumber)
        }
    }else if(thirdNumber >= firsNumber && thirdNumber >= secondNumber){
        if(firsNumber >= secondNumber){
            console.log(thirdNumber)
            console.log(firsNumber)
            console.log(secondNumber)
        }else{
            console.log(thirdNumber)
            console.log(secondNumber)
            console.log(firsNumber)
        }
    }
    
}
sortNumbers(0,
    0,
    2
    
    )