function solve(input){

    let lozeMetres = Number(input.shift());
    let grapesPerMetres = Number(input.shift()); // grozde za 1 kv meter
    let neededWineInLitres = Number(input.shift());
    let numberOfWorkers = Number(input.shift());
    let metresForWineRecolt = lozeMetres * 0.4;
    let neededGrapesForLitreWine = 2.5;

    let wineInLitres = (metresForWineRecolt / neededGrapesForLitreWine) * grapesPerMetres;
    let isThatNeeded = Math.abs(wineInLitres - neededWineInLitres)
    let wineForWorkers = isThatNeeded / numberOfWorkers;

    if(wineInLitres < neededWineInLitres){
        console.log(`It will be a tough winter! More ${Math.floor(isThatNeeded)} liters wine needed.`)
    }else if(wineInLitres >= neededWineInLitres){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineInLitres)} liters.`)
        console.log(`${Math.ceil(isThatNeeded)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`)
    }
   




    
    
    


}

solve(['650', '2', '175', '3'])