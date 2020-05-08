function condenseArray(numberInput){
    let number = numberInput;
    let condensed = [];
    // console.log(number)
    
    while(number.length > 1){
    for(let i = 0; i < number.length - 1;i++){
        condensed.push(number[i] + number[i+1])
    }
    // console.log(condensed)
    number = condensed
    condensed = [];
}
   console.log(number[0])
}
condenseArray([5,0,4,1,2])