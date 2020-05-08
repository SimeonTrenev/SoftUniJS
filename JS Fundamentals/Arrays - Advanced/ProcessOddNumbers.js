function processOddNumber(array = []){

    let myNewArray = array
    .filter((x,i) => i % 2 !==0)
    .map(x => x * 2)
    .reverse()
    .join(' ')
    
    console.log(myNewArray)
}
processOddNumber([3, 0, 10, 4, 7, 3])