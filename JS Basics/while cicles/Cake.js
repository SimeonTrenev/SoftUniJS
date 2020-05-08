function solve(input){
    let widht = +input.shift();
    let height = +input.shift();
    let comand = input.shift();
    let sumOfCake = widht * height;
    let pieces = 0;
    while(comand !== 'STOP' && sumOfCake > pieces){
        pieces += Number(comand)
        comand = input.shift(); 
    }
    let all = Math.abs(sumOfCake - pieces);
    if(comand === 'STOP' && pieces < sumOfCake){
        console.log(`${all} pieces are left.`)
    }else{
        console.log(`No more cake left! You need ${all} pieces more.`)
    }
}
solve(['10', '2', '2', '4', '6', 'STOP' ]);