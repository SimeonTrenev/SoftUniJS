function nationalCourt(input){

    let array = input.slice();
    let firstEmployerServe = Number(array.shift());
    let secondEmployerServe = Number(array.shift());
    let thirdEmployerServe = Number(array.shift());
    let countOfPeople = Number(array.shift());
    let allEmployerServe = firstEmployerServe + secondEmployerServe + thirdEmployerServe;
    
    let hours = 0;
    if(countOfPeople > 0){
    hours = 1;
    }

    for(let i = allEmployerServe;i < countOfPeople;i+=allEmployerServe){
        hours++;
        if(hours % 4 === 0){
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`)

    
}
nationalCourt([ '1', '2', '3', '45' ]
    )


    // function solve (arr){
    //     let firstEmployee = Number(arr[0]);
    //     let secondEmployee = Number(arr[1]);
    //     let thirdEmployee = Number(arr[2]);
      
    //     let countOfPeople = Number(arr[3]);
    //     let totalAnswersPerHour = firstEmployee + secondEmployee + thirdEmployee;
    //     let hourCounter = 0;
      
    //     while(countOfPeople > 0){
    //      hourCounter++;
    //      if(hourCounter % 4 === 0){
    //          hourCounter++
    //      }
    //      countOfPeople -= totalAnswersPerHour;
    //      }
        
        
    //  console.log(`Time needed: ${hourCounter}h. `);
      
    //  }