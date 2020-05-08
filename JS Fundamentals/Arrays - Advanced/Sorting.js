function sorting(array = []){

    let emptyArray = []
    let biggestSorting = array.slice(0).sort((a,b)=> b-a);
    
    
    while(biggestSorting.length > 0){
        emptyArray.push(biggestSorting.shift());
        emptyArray.push(biggestSorting.pop());
    }
    console.log(emptyArray.join(' '))

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])