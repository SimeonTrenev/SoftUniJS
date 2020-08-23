function nikuldensMeals(array) {
 
    let objectForMeals = {};
    let countForUnlikeMeals = 0
    for(let elements of array){
        let [command, guest, meal] = elements.split('-')
        
        if(command === 'Like'){
            if(!objectForMeals.hasOwnProperty(guest)){
                objectForMeals[guest] = []
            }
            if(!objectForMeals[guest].includes(meal)){
                objectForMeals[guest].push(meal)
            }

        }else if(command === 'Unlike'){
            if(objectForMeals.hasOwnProperty(guest)){
                if(objectForMeals[guest].includes(meal)){
                    console.log(`${guest} doesn't like the ${meal}.`)
                    countForUnlikeMeals++;
                    let index = objectForMeals[guest].indexOf(meal);
                    objectForMeals[guest].splice(index,1)
                }else{
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
            }else{
                console.log(`${guest} is not at the party.`)
            }
        }else if(command === 'Stop'){
            let sorted = Object.entries(objectForMeals).sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
            for(let meals of sorted){
                let cycledMeals = meals[1];
                let allMeals = '';
                for(let i = 0; i < cycledMeals.length;i++){
                    let currentMeal = cycledMeals[i];
                    if(i === cycledMeals.length - 1){
                        allMeals += `${currentMeal}`
                    }else{
                        allMeals += `${currentMeal}, `
                    }
                }
                console.log(`${meals[0]}: ${allMeals}`)
            }
            console.log(`Unliked meals: ${countForUnlikeMeals}`)
            break;
        }
    }

 
}
nikuldensMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
  ])