function solve(input){

    let budget = +input.shift();
    let season = input.shift();

    let destination = '';
    let price = 0.0;
    let typeOfVacation = '';

    switch(season){
        case 'summer':
            if(budget <= 100){
                price = budget * 0.3;
                destination = 'Bulgaria';
                typeOfVacation = 'Camp';
            }else if(budget <= 1000){
                price = budget * 0.4;
                destination = 'Balkans';
                typeOfVacation = 'Camp';
            }else{
                price = budget * 0.9;
                destination = 'Europe'
                typeOfVacation = 'Hotel';
            }

        break;
        case 'winter':
            if(budget <= 100){
                price = budget * 0.7;
                destination = 'Bulgaria';
                typeOfVacation = 'Hotel';
            }else if(budget <= 1000){
                price = budget * 0.8;
                destination = 'Balkans';
                typeOfVacation = 'Hotel';
            }else{
                price = budget * 0.9;
                destination = 'Europe'
                typeOfVacation = 'Hotel';
            }

        break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${price.toFixed(2)}`);



}

solve(['1500', 'summer']);