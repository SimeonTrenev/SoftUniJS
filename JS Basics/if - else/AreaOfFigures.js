function solve(input){

    let figure = input.shift();
    let sideA = Number(input.shift());
    let sideB = Number(input.shift());
    

    if(figure === 'square'){
        console.log((sideA * sideA).toFixed(3));
    } else if(figure === 'rectangle'){
        console.log((sideA * sideB).toFixed(3));
    } else if(figure === 'circle'){
        console.log(Math.PI * Math.pow(sideA,2).toFixed(3));
    } else if(figure === 'triangle'){
        console.log(((1 / 2 * sideA)* sideB).toFixed(3));
    }


}

solve(['square', '5', '2.5']);