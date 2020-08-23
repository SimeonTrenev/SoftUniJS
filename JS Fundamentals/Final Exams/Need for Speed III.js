function needForSpeed(array){

    let numberOfCars = Number(array.shift());
    let object = {}
    
    for(let i = 0; i < numberOfCars;i++){
        let [car,miliage,fuel] = array[i].split('|')
        miliage = Number(miliage)
        fuel = Number(fuel)

        object[car] = {miliage,fuel}
        
    }

    let betterInput = array.slice(numberOfCars,array.indexOf('Stop'))
    
    
    for(const line of betterInput){
        let [command, carName, value, secondValue] = line.split(' : ')
        value = Number(value);
        secondValue = Number(secondValue);

        if(command === 'Drive'){
            let distance = value;
            let fuel = secondValue;

            if(fuel > object[carName].fuel){
                console.log('Not enough fuel to make that ride')
            }else{
                object[carName].miliage += distance
                object[carName].fuel -= fuel
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            }
            if(object[carName].miliage >= 100000){
                console.log(`Time to sell the ${carName}!`)
                delete object[carName];
            }
        }else if(command === 'Refuel'){
            let fuel = value;
            if(object[carName].fuel + fuel >= 75){
                console.log(`${carName} refueled with ${75 - object[carName].fuel} liters`)
                object[carName].fuel = 75
            }else{
                object[carName].fuel += fuel;
                console.log(`${carName} refueled with ${fuel} liters`)
            }
        }else if(command === 'Revert'){
            let kilometers = value;

            if(object[carName].miliage - kilometers < 10000){
                object[carName].miliage = 10000
            }else{
                object[carName].miliage -= kilometers
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`)
            }
        }
        
    }
   
    let iterated = Object.entries(object).sort((a,b) => b[1].miliage - a[1].miliage || a[0].localeCompare(b[0]))
    
    for(let cars of iterated){
        console.log(`${cars[0]} -> Mileage: ${cars[1].miliage} kms, Fuel in the tank: ${cars[1].fuel} lt.`)
    }
    
    
    

    
  

}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])


//   function solve(input){


//     let numberOfCars = Number(input.shift());
//     let objectForCars = {};

//     for(let i = 0; i < numberOfCars; i++){
//         let [car, miliage, fuel] = input.shift().split('|')
//         miliage = Number(miliage);
//         fuel = Number(fuel);

//         objectForCars[car] = {miliage,fuel};
//     }

//     for(let elements of input){
//         let currentCommands = elements.split(' : ')
//         let command = currentCommands[0];
//         let car = currentCommands[1];

//         if(command === 'Drive'){
//             let distance = Number(currentCommands[2]);
//             let fuel = Number(currentCommands[3]);
//             drive(objectForCars,car,distance,fuel)
//         }else if(command === 'Refuel'){
//             let fuel = Number(currentCommands[2]);
//             refuel(objectForCars,car,fuel)
//         }else if(command === 'Revert'){
//             let kilometers = Number(currentCommands[2]);
//             revert(objectForCars,car,kilometers)
//         }else if(command === 'Stop'){
//             let sorted = Object.entries(objectForCars).sort((a,b) => b[1].miliage - a[1].miliage || a[0].localeCompare(b[0]))

//             for(let cars of sorted){
//                 console.log(`${cars[0]} -> Mileage: ${cars[1].miliage} kms, Fuel in the tank: ${cars[1].fuel} lt.`)
//             }
//         }
//     }
    

//    function drive(objectForCars,car,distance,fuel){
//        if(objectForCars[car].fuel >= fuel){
//            objectForCars[car].miliage += distance
//            objectForCars[car].fuel -= fuel
//            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
//        }else{
//            console.log(`Not enough fuel to make that ride`)
//        }

//        if(objectForCars[car].miliage >= 100000){
//            console.log(`Time to sell the ${car}!`)
//            delete objectForCars[car]
//        }
//        return objectForCars;
//    }

//    function refuel(objectForCars,car,fuel){
//        if(objectForCars[car].fuel + fuel >= 75){
//            console.log(`${car} refueled with ${75 - objectForCars[car].fuel} liters`)
//            objectForCars[car].fuel = 75;
//        }else{
//            console.log(`${car} refueled with ${fuel} liters`)
//            objectForCars[car].fuel += fuel;
//        }
//        return objectForCars;
//    }

//    function revert(objectForCars,car,kilometers){
       
//        if(objectForCars[car].miliage - kilometers < 10000){
//            objectForCars[car].miliage = 10000
//        }else{
//            objectForCars[car].miliage -= kilometers
//         console.log(`${car} mileage decreased by ${kilometers} kilometers`);
//        }
//        return objectForCars;
//    }
   
// }