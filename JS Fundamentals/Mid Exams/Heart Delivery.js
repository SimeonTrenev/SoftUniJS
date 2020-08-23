function heartDelivery(arr){

    let array = arr.slice()
    let neighborhoodHouse = array.shift().split('@')
    let currentIndex = 0;
    let successfullIndex = 0;
    for(let i = 0; i < array.length;i++){
        let currentComands = array[i].split(' ')
        let comand = currentComands[0]
        let indexes = currentComands[1]

        if(comand === 'Jump'){
            currentIndex += Number(indexes)
            if(currentIndex > neighborhoodHouse.length - 1){
                currentIndex = 0
            }
            if(neighborhoodHouse[currentIndex] === 0){
                console.log(`Place ${currentIndex} already had Valentine's day.`)
                continue;
            }
            neighborhoodHouse[currentIndex] -= 2
            if(neighborhoodHouse[currentIndex] === 0){
                console.log(`Place ${currentIndex} has Valentine's day.`)
                successfullIndex++;
            }
        }else if(comand === 'Love!'){
            console.log(`Cupid's last position was ${currentIndex}.`)
            if(successfullIndex === neighborhoodHouse.length){
                console.log(`Mission was successful.`)
            }else{
                console.log(`Cupid has failed ${neighborhoodHouse.length - successfullIndex} places.`)
            }

        }
    }
    

}
heartDelivery([
    '2@4@2',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ])