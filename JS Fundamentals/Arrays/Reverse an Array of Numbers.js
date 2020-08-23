function reverseAnArray(number, array){

    let output = '';
    let reversedArray = []

    for(let i = 0; i < number; i++){
        reversedArray[i] = array[i]
    }
    
    for(let i = 0; i < reversedArray.length;i++){
        output += reversedArray[reversedArray.length - 1 - i] + ' '
    }
    console.log(output)
    
}
reverseAnArray(3, [10, 20, 30, 40, 50])