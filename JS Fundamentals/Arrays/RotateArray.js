function rotateArray(array = []){

    
    let numberOfRatation = Number(array.pop())
    for(let i = 0; i < numberOfRatation; i++){
        let firstNumber = array.pop()
        array.unshift(firstNumber)
    }
    if(isNaN(numberOfRatation)){
        console.log('Empty')
    }else{
    console.log(array.join(' '))
    }
}
rotateArray(['1', '2', '3', '4', '2'])