function addAndSubstract(firstNumber, secondNumber, thirdNumber){
    function sum(a, b){
        return a + b;
    }
    function substract(a, b){
        return a - b
    }

    let sumRes = sum(firstNumber, secondNumber)
    let subsRes = substract(sumRes, thirdNumber)
    console.log(subsRes)
}
addAndSubstract(23, 6, 10)
