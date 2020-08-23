function evenAndOddSubstraction(array){

    let sumOfEven = 0;
    let sumOfOdd = 0;
    
    for(let number of array){
        if(number % 2 === 0){
            sumOfEven += number
        }else{
            sumOfOdd += number
        }
    }
        let result = sumOfEven - sumOfOdd;
        console.log(result)
    
    }
    evenAndOddSubstraction([1,2,3,4,5,6])