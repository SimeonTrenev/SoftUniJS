function mergeArrays(firstArray = [], secondArray = []){

    let thirdArray = []
    firstArray.map((element, index) =>{
        if(index % 2 === 0){
            thirdArray.push(Number(element) + Number(secondArray[index]))
        }else{
            thirdArray.push(element + secondArray[index])
        }
    })





    // for(let i = 0; i < firstArray.length;i++){
    //         if(i % 2 === 0){
    //             thirdArray.push(Number(firstArray[i]) + Number(secondArray[i]))
    //         }else{
    //             thirdArray.push(firstArray[i] + secondArray[i])
    //         }
        
    // }
    console.log(thirdArray.join(' - '))

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)