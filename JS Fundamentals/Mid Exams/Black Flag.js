function blackFlag(arr){

    let array = arr.slice();
    let days = Number(array.shift());
    let plunderForDay = Number(array.shift());
    let experctedPlunder = Number(array.shift());
    let result = 0;

    
    for(let i = 1; i <= days;i++){
        
       if(i % 3 !== 0 && i % 5 !== 0){
           result += plunderForDay
       }

       if(i % 3 === 0 && i % 5 === 0){
           result += plunderForDay * 1.5;
           result *= 0.7;
       }else if(i % 3 === 0){
           result += plunderForDay * 1.5;
       }else if(i % 5 === 0){
           result = (result + plunderForDay) * 0.7;
       }
    }
    
    let percent = (result / experctedPlunder) * 100;

    if(result >= experctedPlunder){
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`)
    }else{
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }



}
blackFlag([ '10', '20', '380' ])