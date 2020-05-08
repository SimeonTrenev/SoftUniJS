function processOddNums(array = []){

    let ordered = []
    for(let i = 0; i < array.length;i++){
        if(i % 2 !== 0){
            ordered.push(array[i])
        }
    }
    let ord = ordered.map(a => a * 2).reverse();
    
    console.log(ord.join(' '))
}
processOddNums([3, 0, 10, 4, 7, 3])