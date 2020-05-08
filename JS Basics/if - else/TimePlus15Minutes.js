function solve(input){

    let hours = Number(input.shift());
    let minutes = Number(input.shift()) + 15;

 
    if(minutes >= 60){
        minutes = minutes - 60
        hours += 1
    }
    
    if(hours >= 24){
        hours = hours - 24
        
    }

    if(minutes < 10){
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }

    
    





}

solve(['1', '46']);