function reverseAnArrayOfStrings(array){

    
    // let neWestArray = [];
    // let output = '';
    // for(let i = 0; i < array.length;i++){
    //     neWestArray[i] = array[array.length - 1 - i]
    //     output += neWestArray[i] + ' '  
    // }
 
    // console.log(output)
    let halfPastArray = Math.round(array.length / 2)
    let arr = [];
    let output = ''
    for(let i = 0; i < halfPastArray;i++){
        arr[i] = array[array.length - 1 - i]
        arr[array.length - 1 - i] = array[i]

    }
    for(let el of arr){
        output += el + ' '
    }
    console.log(output)
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])