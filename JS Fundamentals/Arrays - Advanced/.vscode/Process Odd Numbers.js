function processOddNumbers(array){

    let reversedArray = [];

    for(index in array){
        if(index % 2 !== 0){
            reversedArray.push(array[index]);
        }
    }
    
    let mapped = reversedArray.map((x) => x * 2).reverse();
    console.log(mapped.join(' '))


}
processOddNumbers([3, 0, 10, 4, 7, 3])