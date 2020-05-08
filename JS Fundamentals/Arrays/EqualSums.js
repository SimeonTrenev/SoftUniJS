function equalSums(array = []){
let areEqual = false;
    for(let i = 0 ; i < array.length;i++){
        let number = array[i]
        let rightSum = 0;
        for(let j = array.length - 1;j > i;j--){
            let current = array[j]
            rightSum += current
        }
        let leftSum = 0;
        for(let b = 0; b < i;b++){
            let current = array[b]
            leftSum += current
        }
        if(leftSum === rightSum){
            console.log(i);
            areEqual = true;
            break;
        }
        if(array.length === 1){
            console.log('0')
        }
    }
    
    if(areEqual === false){
        console.log('no')
    }
    
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])