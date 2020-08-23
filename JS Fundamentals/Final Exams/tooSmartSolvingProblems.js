function solve(input){

	
    let numberOfCars = Number(input.shift());
    let objectForCars = {};
    const	carMethods = {
    	drive: (objectForCars,car,distance,fuel)=>{
       if(objectForCars[car].fuel >= fuel){
           objectForCars[car].miliage += distance
           objectForCars[car].fuel -= fuel
           console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
       }else{
           console.log(`Not enough fuel to make that ride`)
       }

       if(objectForCars[car].miliage >= 100000){
           console.log(`Time to sell the ${car}!`)
           delete objectForCars[car]
       }
       return objectForCars;
      },
      refuel: (objectForCars,car,fuel) =>{
       if(objectForCars[car].fuel + fuel >= 75){
           console.log(`${car} refueled with ${75 - objectForCars[car].fuel} liters`)
           objectForCars[car].fuel = 75;
       }else{
           console.log(`${car} refueled with ${fuel} liters`)
           objectForCars[car].fuel += fuel;
       }
       return objectForCars;
   },
   revert: (objectForCars,car,kilometers) => {
   if(objectForCars[car].miliage - kilometers < 10000){
           objectForCars[car].miliage = 10000
       }else{
           objectForCars[car].miliage -= kilometers
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
       }
       return objectForCars;
   }
   }

    for(let i = 0; i < numberOfCars; i++){
        let [car, miliage, fuel] = input.shift().split('|')
        miliage = Number(miliage);
        fuel = Number(fuel);

        objectForCars[car] = {miliage,fuel};
    }

    for(let elements of input){
        let currentCommands = elements.split(' : ')
        let command = currentCommands[0];
        let car = currentCommands[1];

        if(command === 'Drive'){
            let distance = Number(currentCommands[2]);
            let fuel = Number(currentCommands[3]);
            drive(objectForCars,car,distance,fuel)
        }else if(command === 'Refuel'){
            let fuel = Number(currentCommands[2]);
            refuel(objectForCars,car,fuel)
        }else if(command === 'Revert'){
            let kilometers = Number(currentCommands[2]);
            revert(objectForCars,car,kilometers)
        }else if(command === 'Stop'){
            let sorted = Object.entries(objectForCars).sort((a,b) => b[1].miliage - a[1].miliage || a[0].localeCompare(b[0]))

            for(let cars of sorted){
                console.log(`${cars[0]} -> Mileage: ${cars[1].miliage} kms, Fuel in the tank: ${cars[1].fuel} lt.`)
            }
        }
    }
    
drive(),refuel(),revert()
  
}
