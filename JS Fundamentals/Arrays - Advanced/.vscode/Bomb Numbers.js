function bombNumbers(numbers, bombNumbers){

    let bomb = bombNumbers[0];
    let power = bombNumbers[1];
    let array = numbers.slice();
    
    while(array.includes(bomb)){
        let index = array.indexOf(bomb)
        let startingIndex = Math.max(index - power,0);
        array.splice(index,power + 1)
        array.splice(startingIndex,power)
    }

    let sum = 0;
   for(let i = 0; i < array.length;i++){
       let current = array[i]
       sum += current
   }
    console.log(sum)

}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
    
    
    )