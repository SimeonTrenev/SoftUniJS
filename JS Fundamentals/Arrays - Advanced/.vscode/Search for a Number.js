function searchNumber(NumbersArray, functionalNumbers){

    let takingElements = functionalNumbers[0]
    let deleteElements = functionalNumbers[1]
    let searchNumber = functionalNumbers[2]

    let arr = NumbersArray.slice(0, takingElements)
    arr.splice(0,deleteElements)
    
    let count = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === searchNumber){
            count++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`)


}
searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )