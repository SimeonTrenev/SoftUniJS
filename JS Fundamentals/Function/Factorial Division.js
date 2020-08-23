function factorialDivision(firstNumber, secondNumber){

    let factorialFormula = number =>{
        let factorialNumber = 1;
        for(let i = 1; i <= number;i++){
            factorialNumber *= i
    }
    return factorialNumber;
}

let firstFactorial = factorialFormula(firstNumber);
let secondFactorial = factorialFormula(secondNumber);

let result = firstFactorial / secondFactorial;
return result.toFixed(2);
    
}
console.log(factorialDivision(6, 2))

// function factRecursion(firstNumber, secondNumber){

//     let recursion = firstNumber =>{
//     let res1 = 0;
//     if( firstNumber === 0){
//         return 1;
//     }else{
//        return res1 =  (firstNumber * recursion(firstNumber - 1)) 
//     }
// }

//     let firstFactoriel = recursion(firstNumber)
//     let secondFactoriel = recursion(secondNumber)
//     let result = firstFactoriel / secondFactoriel;
//     return result.toFixed(2)
// }
// console.log(factRecursion(5, 2))