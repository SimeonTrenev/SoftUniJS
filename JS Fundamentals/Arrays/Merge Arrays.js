function mergeArrays(firstArray, secondArray){

    let thirdArray = []
    let str = ''
    for(let i = 0; i < firstArray.length;i++){
        if(i % 2 === 0){
            thirdArray[i] = Number(firstArray[i]) + Number(secondArray[i])
        }else{
            thirdArray[i] = firstArray[i] + secondArray[i] 
        }
    }
    for(let i = 0; i < thirdArray.length; i++){
        if(i === thirdArray.length - 1){
            str += thirdArray[i]
        }else{
            str += thirdArray[i] + ' - '
        }
    }
    console.log(str)
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

)