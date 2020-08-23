function matrix(number){
    let repeated = '';
    for(let i = 0; i < number;i++){
        repeated += number + ' '
    }
    for(let i = 0; i < repeated.length / 2;i++){
        console.log(repeated)
    }
   
}
matrix(2)