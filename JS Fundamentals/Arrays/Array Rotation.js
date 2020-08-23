function arrayRotation(array, numberOfRotation){

    let currentArray = array;
    let str = '';

    for(let i = 0;i < numberOfRotation;i++){
        let currentElement = currentArray.shift()
        currentArray.push(currentElement)
    }
    
    for(let el of currentArray){
        str += el + ' '
    }
    console.log(str)
}
arrayRotation([51, 47, 32, 61, 21], 2)