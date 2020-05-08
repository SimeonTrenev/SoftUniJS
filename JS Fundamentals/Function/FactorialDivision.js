function factorial(firstNumber, secondNumber){

    
    function factNumber(number){
        let factorialNumber = 1;
        for(let i = 1; i <= number;i++){
            factorialNumber = factorialNumber * i
        }
       return factorialNumber
    }
    let factorialForFirstNumber = factNumber(firstNumber)
    let factorialForSecondNumber = factNumber(secondNumber)
    let factDivision = factorialForFirstNumber / factorialForSecondNumber
    console.log(factDivision.toFixed(2))
}
factorial(6, 2)