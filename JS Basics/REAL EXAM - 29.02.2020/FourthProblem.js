function solve(input){

    let numbers = +input.shift();
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 0; i < numbers;i++){
        let newNumbers = +input.shift();
        if(newNumbers % 2 === 0){
            p1++;
        }
        if(newNumbers % 3 === 0){
            p2++;
        }
        if(newNumbers % 4 === 0){
            p3++;
        }
    }
    let percentP1 = (p1 / numbers)*100;
    let percentP2 = (p2 / numbers)*100;
    let percentP3 = (p3 / numbers)*100;

    console.log(`${percentP1.toFixed(2)}%`)
    console.log(`${percentP2.toFixed(2)}%`)
    console.log(`${percentP3.toFixed(2)}%`)

}
solve(['10',  '680', '2',
'600', '200', '800',
'799', '199', '46',
'128', '65']);