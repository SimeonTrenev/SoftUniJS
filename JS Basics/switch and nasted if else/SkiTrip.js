function solve(input){

    let days = +input.shift();
    let typeOfrooms = input.shift();
    let grade = input.shift();

    let nights = days - 1;
    let priceForRoomForOnePerson = 18.00;
    let priceForApartament = 25.00;
    let priceForPresidentApartament = 35.00;
    
    let price = 0.0;

    switch(typeOfrooms){
        case 'room for one person':
            price = priceForRoomForOnePerson * nights;
        break;
        case 'apartment':
        if(nights < 10){
            price = (priceForApartament * nights) * 0.7
        }else if(nights >= 10 && nights <= 15){
            price = (priceForApartament * nights) * 0.65 
        }else{
            price = (priceForApartament * nights) * 0.5
        }
        break;
        case 'president apartment':
            if(nights < 10){
                price = (priceForPresidentApartament * nights) * 0.9
            }else if(nights >= 10 && nights <= 15){
                price = (priceForPresidentApartament * nights) * 0.85;
            }else{
                price = (priceForPresidentApartament * nights) * 0.8
            }
        break;
    }

    if(grade === 'positive'){
        price = price * 1.25;
    }else{
        price = price * 0.9;
    }
    console.log(price.toFixed(2));

}

solve(['30', 'president apartment', 'negative']);