function solve(input){

    let numberOfPlants = Number(input.shift())
    let object = {};

    for(let i = 0; i < numberOfPlants;i++){
        let [plant, rarity] = input.shift().split('<->')
        rarity = Number(rarity);

        if(!object.hasOwnProperty(plant)){
            object[plant] = {rarity, rating : 0,averageRating : 0}
        }else{
            object[plant].rarity += rarity
        }
    }
    
    for(let elements of input){
        let currentElement = elements.split(' ')
        let command = currentElement[0];
        let plant = currentElement[1]

        if(command === 'Rate:'){
            let rating = Number(currentElement[3])
            if(object.hasOwnProperty(plant)){
                object[plant].rating += rating
                object[plant].averageRating++;
            }else{
                console.log(`error`)
            }
           
        }else if(command === 'Update:'){
            let newRarity = Number(currentElement[3])
            if(object.hasOwnProperty(plant)){
                object[plant].rarity = newRarity
            }else{
                console.log(`error`)
            }
        }else if(command === 'Reset:'){
            if(object.hasOwnProperty(plant)){
                object[plant].rating = 0
                object[plant].averageRating = 0
            }else{
                console.log(`error`)
            }
            
        }else if(command === 'Exhibition'){
            let keys = Object.entries(object).map(a => {
                if(a[1].rating > 0){
                  a[1].rating = a[1].rating / a[1].averageRating
                }
                return object
            })
            
            let sorted = Object.entries(object).sort((a,b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating);
            console.log(`Plants for the exhibition:`)
            for(let el of sorted){
                console.log(`- ${el[0]}; Rarity: ${el[1].rarity}; Rating: ${el[1].rating.toFixed(2)}`)
            }
            break;
        }else{
            console.log('error')
        }
        
    }
    
}
solve([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition'
])