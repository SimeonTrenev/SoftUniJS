function equalArrays(firstArray, secondArray){

    let sum = 0;
    let counter = 0;
    let isEqual = true;

    for(let i = 0; i < firstArray.length;i++){
        if(firstArray[i] === secondArray[i]){
            sum += Number(firstArray[i])
        }else{
            counter = i;
            isEqual = false;
            break;
        }
    }
        if(isEqual){
            console.log(`Arrays are identical. Sum: ${sum}`)
        }else{
            console.log(`Arrays are not identical. Found difference at ${counter} index`)
        }
}
equalArrays(['10','20','30'], ['10','20','30'])