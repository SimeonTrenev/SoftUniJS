function oddAndEvenSum(number){

    let myNewNumber = number.toString()
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < myNewNumber.length;i++){
        if(myNewNumber[i] % 2 === 0){
            evenSum += Number(myNewNumber[i])
        }else{
            oddSum += Number(myNewNumber[i])
        }
    }
    let result = (`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    return result
}
console.log(oddAndEvenSum(1000435))

