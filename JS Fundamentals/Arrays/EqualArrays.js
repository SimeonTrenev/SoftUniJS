function equalArrays(firstString, secondString){

    for(let i = 0; i < firstString.length;i++){
        firstString[i] = Number(firstString[i])
    }
    for(let i = 0; i < secondString.length;i++){
        secondString[i] = Number(secondString[i])
    }
    let equal = true;
    let sumOfEqual = 0;
    for(let i = 0; i < firstString.length;i++){
        if(firstString[i] !== secondString[i]){
            equal = false
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            break;
        }else{  
            sumOfEqual += firstString[i]
        }
    }
    if(equal){
        console.log(`Arrays are identical. Sum: ${sumOfEqual}`)
    }
}
equalArrays(['1'], ['10'])