function vacation(numberOfPeople, typeOfGroup, dayOfWeek){

    let price = 0

    switch(typeOfGroup){
        case 'Students':
        if(dayOfWeek === 'Friday'){
            price = numberOfPeople * 8.45
            if(numberOfPeople >= 30){
                price *= 0.85
            }
        }else if(dayOfWeek === 'Saturday'){
            price = numberOfPeople * 9.80
            if(numberOfPeople >= 30){
                price *= 0.85
            }
        }else if(dayOfWeek === 'Sunday'){
            price = numberOfPeople * 10.46
            if(numberOfPeople >= 30){
                price *= 0.85
            }
        }
        break;
        case 'Business':
            if(numberOfPeople >= 100){
                numberOfPeople -= 10
            }
        if(dayOfWeek === 'Friday'){  
            price = numberOfPeople * 10.90
            
        }else if(dayOfWeek === 'Saturday'){
            price = numberOfPeople * 15.60
            
        }else if(dayOfWeek === 'Sunday'){
            price = numberOfPeople * 16
            
        }
        break;
        case 'Regular':
            if(dayOfWeek === 'Friday'){
                price = numberOfPeople * 15
                if(numberOfPeople >= 10 && numberOfPeople <= 20){
                    price *= 0.95
                }
            }else if(dayOfWeek === 'Saturday'){
                price = numberOfPeople * 20
                if(numberOfPeople >= 10 && numberOfPeople <= 20){
                    price *= 0.95
                }
            }else if(dayOfWeek === 'Sunday'){
                price = numberOfPeople * 22.50
                if(numberOfPeople >= 10 && numberOfPeople <= 20){
                    price *= 0.95
                }
            }
        break;
    }
    console.log(`Total price: ${price.toFixed(2)}`)

}
vacation(40,
    "Regular",
    "Saturday"
    
    )