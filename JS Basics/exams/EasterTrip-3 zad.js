function solve(input){

    let destination = input.shift();
    let reservationDates = input.shift();
    let numberOfnights = +input.shift();
    let price = 0;

    switch(destination){
        case 'France':
            if(reservationDates === '21-23'){
                price = 30 * numberOfnights;
            }else if(reservationDates === '24-27'){
                price = 35 * numberOfnights;
            }else{
                price = 40 * numberOfnights;
            }           
        break;
        case 'Italy':
            if(reservationDates === '21-23'){
                price = 28 * numberOfnights;
            }else if(reservationDates === '24-27'){
                price = 32 * numberOfnights;
            }else{
                price = 39 * numberOfnights;
            }
        break;
        case 'Germany':
            if(reservationDates === '21-23'){
                price = 32 * numberOfnights;
            }else if(reservationDates === '24-27'){
                price = 37 * numberOfnights;
            }else{
                price = 43 * numberOfnights;
            }
        break;
    }
        console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)

}
solve(['Germany',
    '24-27',
    '5'
    ])