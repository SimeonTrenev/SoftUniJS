function equalSums(array){

    
    
    let isEqual = false;
    
    for(let i = 0; i < array.length;i++){
        let rightSum = 0;
        for(let j = array.length - 1; j > i;j--){
            let current = array[j]
            rightSum += current
        }
        let leftSum = 0;
        for(let b = 0; b < i;b++){
            let current = array[b]
            leftSum += current
        }
        if(leftSum === rightSum){
            console.log(i)
            isEqual = true
            break;
        }
    }
    if(array.length === 1 && isEqual === false){
        console.log('0')
    }
    if(!isEqual){
        console.log('no')
    }
}
equalSums([1, 2, 3, 3])