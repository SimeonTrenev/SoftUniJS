function sorting(array){

    let sortedArray = []
    let smallestNumbersArray = array.slice();
    let biggestNumbersArray = array.slice();

    smallestNumbersArray.sort((a,b) => {
        return a - b;
    })

    biggestNumbersArray.sort((a,b)=>{
        return b - a;
    })

    if(array.length % 2 === 0){
    for(let i = 0; i < array.length / 2;i++){
        sortedArray.push(biggestNumbersArray[i],smallestNumbersArray[i])
    }
}else{
    for(let i = 0; i < array.length / 2;i++){
        if(!sortedArray.includes(biggestNumbersArray[i])){
            sortedArray.push(biggestNumbersArray[i])
        }
        if(!sortedArray.includes(smallestNumbersArray[i])){
            sortedArray.push(smallestNumbersArray[i])
        }
    }
}
    console.log(sortedArray.join(' '))

    // let sorted = input.slice().sort((a,b) => b - a);
    // let arr = []
    // while(sorted.length > 0){
    //     arr.push(sorted.shift())
    //     arr.push(sorted.pop())
    // }
    // console.log(arr.join(' '))



}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])