function latinLetters(number){

    let firstNum = 'a'.charCodeAt(0)
    
    for(let i = 0; i < number;i++ ){
        for(let j = 0; j < number;j++){
            for(let k = 0 ; k < number;k++){
                let result = String.fromCharCode(
                    firstNum + i,
                    firstNum + j,
                    firstNum + k);
                    console.log(result)
            }
        }
    }
}
latinLetters(3)
