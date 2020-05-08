function solve(input){

    let floor = +input.shift();
    let rooms = +input.shift();
    

    for(let i = floor; i > 0; i--){
        let sum = '';
        for(let j = 0; j < rooms; j++){
            if(i === floor){
            sum += `L${i}${j} `
            }else if(i % 2 === 1){
            sum += `A${i}${j} `
            }else if(i % 2 === 0){
            sum += `O${i}${j} `
            }
          
        }
        console.log(sum)
    }

}
solve(['9', '5'])