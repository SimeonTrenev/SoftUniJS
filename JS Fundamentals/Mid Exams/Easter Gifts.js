function easterGifts(arr){

    let array = arr.slice();
    let presents = array.shift().split(' ');

    for(let elements of array){
        let currentComands = elements.split(' ');
        let comand = currentComands[0];
        let gift = currentComands[1];

        if(comand === 'OutOfStock'){
            if(presents.includes(gift)){
                for(let i = 0 ; i < presents.length;i++){
                    if(presents[i] === gift){
                        presents[i] = 'None'
                    }
                }
            }
        }else if(comand === 'Required'){
            let index = Number(currentComands[2])
            if(presents.includes(presents[index])){
                presents[index] = gift;
            }
        }else if(comand === 'JustInCase'){
            let valueOfLastGift = presents.length - 1;
            presents[valueOfLastGift] = gift;
        }else if(comand === 'No' && gift === 'Money'){
            if(presents.includes('None')){
                let filtered = presents.filter((x) => x !== 'None')
                console.log(filtered.join(' '))
            }else{
                console.log(presents.join(' '))
            }
            break;
        }



    }
}
easterGifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
  ])