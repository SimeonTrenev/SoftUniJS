function dayOfWeek(number){

    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    // if(number === 1){
    //     console.log(day[0])
    // }else if(number === 2){
    //     console.log(day[1])
    // }else if(number === 3){
    //     console.log(day[2])
    // }else if(number === 4){
    //     console.log(day[3])
    // }else if(number === 5){
    //     console.log(day[4])
    // }else if(number === 6){
    //     console.log(day[5])
    // }else if(number === 7){
    //     console.log(day[6])
    // }else{
    //     console.log('Invalid day!')
    // }

    if(number >= 1 && number <= 7){
        console.log(day[number - 1])
    }else{
        console.log('Invalid day!')
    }

}
dayOfWeek(3)