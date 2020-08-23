function addAndSubstract(array){

    let numbers = array
    let sumOfArray = 0
    let sumOfModifiedArray = 0
    let modifiedArray = []

    for(let i = 0; i < numbers.length;i++){
        sumOfArray += numbers[i]
        if(numbers[i] % 2 === 0){
            modifiedArray[i] = numbers[i] + i
        }else{
            modifiedArray[i] = numbers[i] - i
        }
    }
    for(let el of modifiedArray){
        sumOfModifiedArray += el
    }
    console.log(modifiedArray)
    console.log(sumOfArray)
    console.log(sumOfModifiedArray)
   
    

}
addAndSubstract([5, 15, 23, 56, 35])