function solve(input){

    let sizeOfEggs = input.shift();
    let colourOfEggs = input.shift();
    let partides = +input.shift();
    let money = 0;

    switch(sizeOfEggs){
        case 'Large':
        if(colourOfEggs === 'Red'){
            money = partides * 16;
        }else if(colourOfEggs === 'Green'){
            money = partides * 12;
        }else{
            money = partides * 9;
        }
        break;
        case 'Medium':
            if(colourOfEggs === 'Red'){
                money = partides * 13;
            }else if(colourOfEggs === 'Green'){
                money = partides * 9;
            }else{
                money = partides * 7;
            }
        break;
        case 'Small':
            if(colourOfEggs === 'Red'){
                money = partides * 9;
            }else if(colourOfEggs === 'Green'){
                money = partides * 8;
            }else{
                money = partides * 5;
            }
        break;
    }
    let razhodi = money * 0.35;
    money -= razhodi;

    console.log(`${money.toFixed(2)} leva.`)
}
solve(['Large',
    'Red',
    '7'
    ]);