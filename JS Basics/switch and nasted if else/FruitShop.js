function solve(input){

    let fruit = input.shift();
    let day = input.shift();
    let quantity = +input.shift();
    let price = 0.0;

    switch(fruit){
        case 'banana':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 2.5 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 2.7 * quantity;
            }else{
                console.log('error');
                
            }
        break;
        case 'apple':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 1.2 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 1.25 * quantity;
            }else{
                console.log('error');  
            }
        break;
        case 'orange':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 0.85 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 0.9 * quantity;
            }else{
                console.log('error');
            }
        break;
        case 'grapefruit':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 1.45 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 1.60 * quantity;
            }else{
                console.log('error');  
            }
        break;
        case 'kiwi':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 2.7 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 3 * quantity;
            }else{
                console.log('error');            
            }
        break;
        case 'pineapple':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 5.5 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 5.6 * quantity;
            }else{
                console.log('error');              
            }
        break;
        case 'grapes':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
                price = 3.85 * quantity;
            }else if(day === 'Saturday' || day === 'Sunday'){
                price = 4.2 * quantity;
            }else{
                console.log('error');           
            }
        break;
        default:
            console.log('error');
        break;
    }
    if(price !== 0.00){
        console.log(price.toFixed(2))
     }else{
        
    }
    
}

solve(['tomato', 'Monday', '0.5']);