function smallestTwoNumbers(array){

    let small = array.sort((a,b)=>a - b);
    
    let smallest = small.slice(0,2)
    console.log(smallest.join(' '))
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])