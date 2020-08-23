function addAndSubstract(firstNumber, secondNumber, thirdNumber){

    let add = (a,b) => a + b;
    let substract = (a, b) => a - b;

    let result = add(firstNumber,secondNumber);
    result = substract(result,thirdNumber);
    return result;
}
console.log(addAndSubstract(42,
    58,
    100
    
    
    ))