function oddAndEvenSum(number){

    let oddSum = 0;
    let evenSum = 0;

    while(number > 0){
        let currentNum = number % 10;
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
        number = parseInt(number / 10);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    
}
console.log(oddAndEvenSum( 1000435))