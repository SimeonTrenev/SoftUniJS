function searchNum(firstArray = [], secondArray = []){

    let numberOfElement = secondArray[0];
    let deleteNumberOfElement = secondArray[1];
    let searchNumber = secondArray[2];
    
    let myNewArray = firstArray.slice(0,numberOfElement)
    for(let i = 0; i < deleteNumberOfElement;i++){
        myNewArray.shift()
    }
    let count = 0
    for(let i = 0; i < myNewArray.length;i++){
        if(myNewArray[i] === searchNumber){
            count++
        }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`)
    

    
    
}
searchNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )