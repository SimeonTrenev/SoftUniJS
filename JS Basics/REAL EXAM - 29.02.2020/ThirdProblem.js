function solve(input){

    let destination = input.shift();
    let dates = input.shift();
    let nights = +input.shift();
    let price = 0;

    switch(destination){
        case 'France':
        if(dates === '21-23'){
            price = nights * 30;
        }else if(dates === '24-27'){
            price = nights * 35;
        }else if(dates === '28-31'){
            price = nights * 40;
        }
        break;
        case 'Italy':
            if(dates === '21-23'){
                price = nights * 28;
            }else if(dates === '24-27'){
                price = nights * 32;
            }else if(dates === '28-31'){
                price = nights * 39;
            }
        break;
        case 'Germany':
            if(dates === '21-23'){
                price = nights * 32;
            }else if(dates === '24-27'){
                price = nights * 37;
            }else if(dates === '28-31'){
                price = nights * 43;
            }
        break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)

}
solve(['Germany', '24-27', '5' ]);