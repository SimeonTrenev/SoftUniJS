function nXnMatrix(number){

    let sum = '';
    for(let row = 0; row < number; row++){   
        sum = number + ' '
        console.log(sum.repeat([number]))
    }
}
nXnMatrix(7)