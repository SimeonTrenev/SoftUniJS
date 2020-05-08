function solve(input){

    let product = input.shift();
    let town = input.shift();
    let quantity = +input.shift();
    let price = 0.0;

    switch(product){
        case 'coffee':
        if(town === 'Sofia'){
            price = 0.50 * quantity;
        } else if( town === 'Plovdiv'){
            price = 0.40 * quantity;
        }else{
            price = 0.45 * quantity;
        }
        break;
        case 'water':
            if(town === 'Sofia'){
                price = 0.8 * quantity;
            }else if(town === 'Plovdiv'){
                price = 0.70 * quantity;
            }else{
                price = 0.7 * quantity;
            }
        break;
        case 'beer':
            if(town === 'Sofia'){
                price = 1.2 * quantity;
            }else if(town === 'Plovdiv'){
                price = 1.15 * quantity;
            }else{
                price = 1.10 * quantity;
            }

        break;
        case 'sweets':
            if(town === 'Sofia'){
                price = 1.45 * quantity;
            }else if(town === 'Plovdiv'){
                price = 1.30 * quantity;
            }else{
                price = 1.35 * quantity;
            }
        break;
        case 'peanuts':
            if(town === 'Sofia'){
                price = 1.6 * quantity;
            }else if(town === 'Plovdiv'){
                price = 1.5 * quantity;
            }else{
                price = 1.55 * quantity
            }
        break;
    }
        console.log(price);

}

solve(['peanuts', 'Plovdiv', '1']);