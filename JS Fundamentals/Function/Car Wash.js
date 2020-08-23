function carWash(array){

    let percentClean = 0;
    for(let i = 0; i < array.length;i++){
        if(array[i] === 'soap'){
            percentClean += 10;
        }else if(array[i] === 'water'){
            percentClean *= 1.2;
        }else if(array[i] === 'vacuum cleaner'){
            percentClean *= 1.25;
        }else{
            percentClean *= 0.9;
        }
        
    }
    return `The car is ${percentClean.toFixed(2)}% clean.`;


}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))