function solve(input){
    
    for(let hours = 0; hours < 24; hours++){
        
        for(let minutes = 0; minutes < 60;minutes++){
            if(hours < 10 && minutes < 10){
                console.log(`0${hours}:0${minutes}`)
            }else if(hours < 10){
                console.log(`0${hours}:${minutes}`)
            }else if(minutes < 10){
                console.log(`${hours}:0${minutes}`)
            }else{
            console.log(`${hours}:${minutes}`)
            }
        }
        
    }
 


}
solve([])